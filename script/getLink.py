from os import listdir
from os.path import isfile, join
from typing import List, TypedDict
import re
from unicodedata import name

BASE_URL = 'https://rabbittee.github.io/JavaScript30/'

USER_INFO = {
    'alpha': {'alias': '阿法', 'avatar_id': '46735230'},
    'cola': {'alias': '可樂', 'avatar_id': '3334950'},
    'erica': {'alias': '鳥胃', 'avatar_id': '53078636'},
    'elzuoc': {'alias': '轉圈圈', 'avatar_id': '68758083'},
    'haha': {'alias': '吠吠', 'avatar_id': '40877568'},
    'husky': {'alias': '哈奇', 'avatar_id': '18141436'},
    'kevin': {'alias': '凱文', 'avatar_id': '56685204'},
    'kim': {'alias': '阿金', 'avatar_id': '87320011'},
    'kirby': {'alias': '哈囉', 'avatar_id': '32451546'},
    'pencil': {'alias': '鉛筆', 'avatar_id': '49506360'},
    'plusfive': {'alias': '+5', 'avatar_id': '75515395'},
    'recoil': {'alias': '奶捲', 'avatar_id': '40841221'},
    'white': {'alias': '小白', 'avatar_id': '82199955'}
}


class LinkDict(TypedDict):
    id: str
    name: str
    avatar_id: str
    path: str


def get_day_links(day_path: str) -> List[LinkDict]:
    links = []
    users_dir = listdir(day_path)

    for dir_name in users_dir:
        user_full_path = join(day_path, dir_name)
        index_path = join(day_path, dir_name, 'index.html')
        if isfile(user_full_path) or dir_name == 'sample' or not isfile(index_path):
            continue

        info = USER_INFO.get(
            dir_name.lower(),
            {'alias': dir_name, 'avatar_id': ''}
        )

        dist_index_path = join(day_path, dir_name, 'dist', 'index.html')

        user = {
            'id': dir_name,
            'name': info['alias'],
            'avatar_id': info['avatar_id'],
            'path': f'{BASE_URL}{user_full_path}/'
        }
        if isfile(dist_index_path):
            user['path'] += 'dist/'

        links.append(user)

    links.sort(key=lambda i: i['path'])
    return links


def create_markdown_text(users_link: List[LinkDict]) -> str:
    output = '## Links\n\n'
    for user_link in users_link:
        output += f'- [{user_link["name"]}]({user_link["path"]})\n'

    return output


def update_markdown(day_path: str, links_text: str) -> None:
    output = ''
    try:
        with open(f'{day_path}/README.md', 'rt') as fin:
            output = fin.read()
    except OSError as e:
        print(e)
        output = f'# {day_path}'

    output = re.sub(
        r'\n\n## Links\n\n(- \[.*\]\(https://rabbittee.github.io/.*\)\n)+',
        '',
        output
    )

    with open(f'{day_path}/README.md', 'wt') as fout:
        fout.write(f'{output}\n\n{links_text}')


def gen_avatar_link(user: LinkDict) -> str:
    if user['avatar_id'] == '':
        return f'https://ui-avatars.com/api/?background=random&name={user["id"]}'
    return f'https://avatars.githubusercontent.com/u/{user["avatar_id"]}?s=60&v=4'


def gen_dashboard_item(user: LinkDict) -> str:
    with open(f'script/day_dashboard_item.template', 'rt') as fin:
        item_str = fin.read()

    info = {
        'id': user['id'],
        'name': user['name'],
        'link_url': user['path'],
        'link_avatar': gen_avatar_link(user)
    }

    for key, value in info.items():
        item_str = item_str.replace(f'{{{{{key}}}}}', value)

    return item_str


def gen_dashboard(day_path: str, users_link: List[LinkDict]) -> None:
    dashboard_item = '\n'.join(
        [gen_dashboard_item(user_link) for user_link in users_link]
    )

    with open(f'script/day_dashboard.template', 'rt') as fin:
        dashboard_str = fin.read()

    dashboard_str = dashboard_str.replace(
        '{{items}}', dashboard_item).replace('{{day}}', day_path[-2:])

    with open(f'{day_path}/index.html', 'wt') as fout:
        fout.write(dashboard_str)


if __name__ == '__main__':

    for i in range(1, 31):
        day = f'day{str(i).rjust(2, "0")}'
        users_link = get_day_links(day)
        if len(users_link) == 0:
            continue
        markdown_text = create_markdown_text(users_link)
        update_markdown(day, markdown_text)
        gen_dashboard(day, users_link)
