'use client'

import ForceGraph2D from 'react-force-graph-2d';
import { NodeObject, LinkObject, GraphData } from 'react-force-graph-2d';
import { useState, useEffect } from 'react';
import { create } from "zustand"
import { ChevronLeft, Expand } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

interface State {
  title: string | null;
  id: string | null;
  tooltip?: boolean;
  setId: (title: string | null, id: string | null, tooltip?: boolean) => void;
}

export const useHoveredLink = create<State>((set) => ({
  title: null,
  id: null,
  tooltip: true,
  setId: (title: string | null, id: string | null, tooltip?: boolean) => set({ title: title, id: id, tooltip: tooltip}),
}));

export type Graph = {
  nodes: Node[],
  links: Link[]
}

export type Link = {
  source: string | {id: string};
  target: string | {id: string};
}

export type Node = {
  id: string;
  title: string;
  depth?: number;
  val?: number;
}

export function GraphRenderer({
  data
}: {
  data: Graph | undefined;
}) {
  if (data === undefined) return (<div>no graph</div>);
  const DynamicLocalGraph = dynamic(() => import('./LocalGraph'), {ssr: false});

  return (
    <div className="flex justify-center items-center">
      <DynamicLocalGraph graphData={data} />
    </div>
  )
}

export function ControllerButton({
  role,
  icon,
  onClick,
  depth,
}: {
  role: string,
  icon: React.ReactNode;
  onClick?: () => void;
  depth?: number;
 }) {
  const disabled =
    (role === 'inc' && depth && depth >= 3 ? true : false) ||
    (role === 'dec' && depth && depth <= 1 ? true : false);
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-2 py-2 rounded-sm hover:brightness-90 transition-filter duration-300 backdrop-blur-sm ${disabled ? 'pointer-events-none text-text-600' : 'pointer-events-auto text-text-800'}`}
    >
      {icon}
    </button>
  )
}

const graphData: Record<number, Graph> = {
  1: {
    nodes: [
      { id: "label1", title: "label1" },
      { id: "label2", title: "label2" },
      { id: "label3", title: "label3" },
      { id: "label4", title: "label4" }
    ],
    links: [
      { source: "label1", target: "label2" },
      { source: "label1", target: "label3" },
      { source: "label1", target: "label4" }
    ]
  },
  2: {
    nodes: [
      { id: "label1", title: "label1" },
      { id: "label2", title: "label1" },
      { id: "label3", title: "label1" },
      { id: "label4", title: "label1" },
      { id: "label5", title: "label1" },
      { id: "label6", title: "label1" },
      { id: "label7", title: "label1" },
      { id: "label8", title: "label1" }
    ],
    links: [
      { source: "label1", target: "label2" },
      { source: "label1", target: "label3" },
      { source: "label1", target: "label4" },
  
      { source: "label2", target: "label5" },
      { source: "label2", target: "label6" },
  
      { source: "label3", target: "label7" },
      { source: "label4", target: "label8" }
    ]
  },
  3: {
    nodes: [
      { id: "label1", title: "label1" },
      { id: "label2", title: "label1" }, { id: "label3", title: "label1" }, { id: "label4", title: "label1" },
      { id: "label5", title: "label1" }, { id: "label6", title: "label1" }, { id: "label7", title: "label1" },
      { id: "label8", title: "label1" },
      { id: "label9", title: "label1" }, { id: "label10", title: "label1" },
      { id: "label11", title: "label1" }, { id: "label12", title: "label1" }
    ],
    links: [
      { source: "label1", target: "label2" },
      { source: "label1", target: "label3" },
      { source: "label1", target: "label4" },
  
      { source: "label2", target: "label5" },
      { source: "label2", target: "label6" },
      { source: "label3", target: "label7" },
      { source: "label3", target: "label8" },
  
      { source: "label5", target: "label9" },
      { source: "label6", target: "label10" },
      { source: "label7", target: "label11" },
      { source: "label8", target: "label12" }
    ]
  }
}

export default function NetworkGraph() {
  const [depth, setDepth] = useState(1);

  return (
    <div className="w-100 h-auto flex flex-col gap-2">
      <div className="w-100 h-100 border text-text-800 border-text-600 flex items-center justify-center rounded-sm backdrop-blur-2xl bg-background/70">
        <GraphRenderer data={graphData[depth]} />
      </div>

      <div className="flex w-full justify-between">
        <div className="flex gap-1 items-center">
          <ControllerButton
            role='dec'
            icon={<ChevronLeft className="w-4 h-4" />}
            onClick={() => setDepth(depth - 1)}
            depth={depth}
          />
          <p className="px-2">{depth}</p>
          <ControllerButton
            role='inc'
            icon={<ChevronLeft className="w-4 h-4 -scale-x-100" />}
            onClick={() => setDepth(depth + 1)}
            depth={depth}
          />
        </div>
        <Link
          href={'https://www.solmi.wiki/graph'}
          className="flex gap-1 items-center"
          target='_blank'
        >
          <ControllerButton
            role='exp'
            icon={<Expand className="w-4 h-4"/>}
          />
        </Link>
      </div>
    </div>
  )
}