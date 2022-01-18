from os import listdir
from os.path import isfile, join
from typing import List, TypedDict
import re


BASE_URL = 'https://rabbittee.github.io/JavaScript30/'
USER_ALIAS = {
    'alpha': '阿法',
    'cola': '可樂',
    'erica': '鳥胃',
    'elzuoc': '轉圈圈',
    'haha': '吠吠',
    'husky': '哈奇',
    'kevin': '凱文',
    'kim': '阿金',
    'kirby': '哈囉',
    'pencil': '鉛筆',
    'plusfive': '+5',
    'recoil': '奶捲',
    'white': '小白'
}


class LinkDict(TypedDict):
    user: str
    path: str


def get_day_links(day_path: str) -> List[LinkDict]:
    links = []
    users_dir = listdir(day_path)

    for dir_name in users_dir:
        user_full_path = join(day_path, dir_name)
        if isfile(user_full_path) or dir_name == 'sample':
            continue

        alias = USER_ALIAS.get(dir_name.lower(), dir_name)

        dist_index_path = join(day_path, dir_name, 'dist', 'index.html')
        index_path = join(day_path, dir_name, 'index.html')
        if isfile(dist_index_path):
            links.append({
                'user': alias,
                'path': f'{BASE_URL}{user_full_path}/dist/'
            })
        elif isfile(index_path):
            links.append({
                'user': alias,
                'path': f'{BASE_URL}{user_full_path}/'
            })
    links.sort(key=lambda i: i['path'])
    return links


def create_markdown_text(users_link: List[LinkDict]) -> str:
    output = '## Links\n\n'
    for user_link in users_link:
        output += f'- [{user_link["user"]}]({user_link["path"]})\n'

    return output


def update_markdown(day_path: str, links_text: str):
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


if __name__ == '__main__':

    for i in range(1, 31):
        day = f'day{str(i).rjust(2, "0")}'
        users_link = get_day_links(day)
        if len(users_link) == 0:
            continue
        markdown_text = create_markdown_text(users_link)
        update_markdown(day, markdown_text)
