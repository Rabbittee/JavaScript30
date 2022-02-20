### skill
1. innerHeight: returns the interior height of the window in pixels (視窗內高度)
2. offsetTop: 圖片的頂端距離真正的 window 頂端有多遠
3. Intersection Observer API:
    - new IntersectionObserver() 建立 oberver 實例
    - callback: 要對被觀察的東東做什麼事
    - option:
      - root: 基於 target 的祖父或父元素確認 target 的可視力
      - rootMargin: Margin around the root
      - threshold: 幾趴才會開始啟動 callback