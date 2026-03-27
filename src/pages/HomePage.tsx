import { useState } from 'react'
import { Link } from 'react-router-dom'
import keywordsData from '../content/other/keywords.json'

const deploymentItems = [
  { name: 'Amazon AWS', description: 'Leading cloud platform for hosting and scaling apps.', to: '/amazon' },
  { name: 'Google Cloud', description: 'Cloud suite strong in data, ML, and Kubernetes.', to: '/google' },
  { name: 'Microsoft Azure', description: 'Enterprise cloud deeply integrated with Microsoft tools.', to: '/microsoft' },
]

const productStackItems = [
  { name: 'LangChain', description: 'Framework for building apps with LLMs and agents.', to: null },
  { name: 'Gemini', description: "Google's multimodal AI for text, code, and images.", to: null },
  { name: 'Hugging Face', description: 'Hub for sharing and deploying ML models and datasets.', to: null },
]

const devToolsItems = [
  { name: 'Claude Code', description: "Anthropic's agentic coding assistant for terminal and IDE.", to: null },
  { name: 'Cursor', description: 'AI-first code editor with inline edits and chat.', to: null },
  { name: 'OpenClaw (ClawdBot)', description: 'Claude-powered chatbot for experimenting with AI workflows.', to: null },
]

const pillColors = [
  'text-red-400',
  'text-indigo-400',
  'text-purple-400',
  'text-teal-400',
  'text-emerald-400',
  'text-yellow-400',
  'text-blue-400',
  'text-pink-400',
]

function CategoryCard({ name, description, to }: { name: string; description: string; to: string | null }) {
  const inner = (
    <div className="px-5 py-4 transition-shadow bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-md">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-400 mt-0.5">{description}</p>
    </div>
  )
  return to ? <Link to={to} className="block">{inner}</Link> : inner
}

type Keyword = typeof keywordsData.keywords[number]

export default function HomePage() {
  const keywords = keywordsData.keywords
  const [hoveredKw, setHoveredKw] = useState<Keyword | null>(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 })

  function handleMouseEnter(kw: Keyword, e: React.MouseEvent) {
    setHoveredKw(kw)
    setPopupPos({ x: e.clientX, y: e.clientY })
  }

  function handleMouseMove(e: React.MouseEvent) {
    setPopupPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Life Design Lab<br />AI Development Guide
      </h1>
      <p className="max-w-lg mt-4 text-base text-gray-600">
        A comprehensive guide to getting started with AI Development. Fill in experience gaps around generative
        AI and software development so that you can enhance your resume with experience!
      </p>

      <div className="mt-8">
        <span className="block mb-2 text-sm text-gray-500">Daily Keywords (hover to see explanations!):</span>
        <div className="py-2 overflow-hidden border border-gray-200 rounded-lg bg-gray-50">
          <div className="marquee-track">
            {[...keywords, ...keywords].map((kw, i) => (
              <span
                key={i}
                className={`font-semibold mx-8 whitespace-nowrap text-sm cursor-default ${pillColors[i % pillColors.length]}`}
                onMouseEnter={(e) => handleMouseEnter(kw, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredKw(null)}
              >
                {kw.term}
              </span>
            ))}
          </div>
        </div>
      </div>

      {hoveredKw && (
        <div
          className="fixed z-50 p-4 bg-white border border-gray-200 shadow-xl pointer-events-none w-72 rounded-xl"
          style={{ left: popupPos.x + 16, top: popupPos.y + 16 }}
        >
          <p className="text-base font-bold text-gray-900">{hoveredKw.term}</p>
          {hoveredKw.fullName !== hoveredKw.term && (
            <p className="text-xs text-gray-400 mt-0.5">{hoveredKw.fullName}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{hoveredKw.explanation}</p>
          <p className="mt-3 text-xs italic text-gray-400">Origin: {hoveredKw.origin}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        {/* Deployment — teal */}
        <div className="rounded-xl bg-teal-50 border border-teal-100 overflow-hidden">
          <div className="h-1.5 bg-teal-500" />
          <div className="p-4">
            <h2 className="mb-4 text-lg font-bold text-teal-800">
              Deployment
            </h2>
            <div className="space-y-3">
              {deploymentItems.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </div>
            <button className="w-full py-2 mt-3 text-sm font-medium text-teal-600 transition-colors bg-white border border-teal-200 rounded-xl hover:bg-teal-50 hover:text-teal-800">
              ⇓ more
            </button>
          </div>
        </div>

        {/* Product Stack — blue */}
        <div className="rounded-xl bg-blue-50 border border-blue-100 overflow-hidden">
          <div className="h-1.5 bg-blue-500" />
          <div className="p-4">
            <h2 className="mb-4 text-lg font-bold text-blue-900">
              Product Stack
            </h2>
            <div className="space-y-3">
              {productStackItems.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </div>
            <button className="w-full py-2 mt-3 text-sm font-medium text-blue-600 transition-colors bg-white border border-blue-200 rounded-xl hover:bg-blue-50 hover:text-blue-900">
              ⇓ more
            </button>
          </div>
        </div>

        {/* Dev Tools — purple */}
        <div className="rounded-xl bg-purple-50 border border-purple-100 overflow-hidden">
          <div className="h-1.5 bg-purple-500" />
          <div className="p-4">
            <h2 className="mb-4 text-lg font-bold text-purple-900">
              Dev Tools +
            </h2>
            <div className="space-y-3">
              {devToolsItems.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </div>
            <button className="w-full py-2 mt-3 text-sm font-medium text-purple-600 transition-colors bg-white border border-purple-200 rounded-xl hover:bg-purple-50 hover:text-purple-900">
              ⇓ more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
