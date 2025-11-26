export default function Home() {
  const comps = ['book', 'chron-post-list', 'continuous-post-nav', 'cpnia-buttons', 'cpnia-logotype', 'cpnia-player', 'floor-plan', 'go-to-top', 'image-scroll-scale', 'network-graph', 'keyword-cmp', 'search-cmp', 'tag-cmp', 'sequence-nav','solmi-wiki-2-colors','solmi-wiki-2-typography','toc']

  return (
    <div className="w-full h-full flex flex-wrap overflow-y-scroll">
      {comps.map((comp, i) => 
        <iframe key={i} src={`/${comp}`} className="max-w-96 flex-1 h-1/3 p-4" />
      )}
    </div>
  );
}