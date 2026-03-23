import { Link } from 'react-router-dom'

const deploymentItems = [
  { name: 'Amazon AWS', description: 'Info Info Info', to: '/amazon' },
  { name: 'Google Cloud', description: 'Info Info Info', to: '/google' },
  { name: 'Microsoft Azure', description: 'Info Info Info', to: '/microsoft' },
]

const productStackItems = [
  { name: 'LangChain', description: 'Info Info Info', to: null },
  { name: 'Gemini', description: 'Info Info Info', to: null },
  { name: 'Hugging Face', description: 'Info Info Info', to: null },
]

const devToolsItems = [
  { name: 'Claude Code', description: 'Info Info Info', to: null },
  { name: 'Cursor', description: 'Info Info Info', to: null },
  { name: 'OpenClaw (ClawdBot)', description: 'Info Info Info', to: null },
]

const keywordPillColors = [
  'border-red-400 text-red-400',
  'border-indigo-400 text-indigo-400',
  'border-purple-400 text-purple-400',
  'border-green-400 text-green-400',
  'border-emerald-300 text-emerald-300',
  'border-yellow-300 text-yellow-300',
]

function CategoryCard({ name, description, to }: { name: string; description: string; to: string | null }) {
  const inner = (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 hover:shadow-md transition-shadow cursor-pointer">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-400 mt-0.5">{description}</p>
    </div>
  )
  return to ? <Link to={to}>{inner}</Link> : inner
}

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-5xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Life Design Lab<br />AI Development Guide
      </h1>
      <p className="mt-4 text-base text-gray-600 max-w-lg">
        A comprehensive guide to getting started with AI Development. Fill in experience gaps around generative
        AI and software development so that you can enhance your resume with experience!
      </p>

      <div className="mt-8 flex items-center gap-3 flex-wrap">
        <span className="text-sm text-gray-500 mr-1">Daily Keywords:</span>
        {keywordPillColors.map((colors, i) => (
          <span
            key={i}
            className={`border-2 rounded-full px-5 py-1 text-sm font-medium ${colors}`}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold text-teal-500 border-b-2 border-teal-400 pb-1 mb-4">
            Deployment
          </h2>
          <div className="space-y-3">
            {deploymentItems.map((item) => (
              <CategoryCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-blue-600 border-b-2 border-blue-500 pb-1 mb-4">
            Product Stack
          </h2>
          <div className="space-y-3">
            {productStackItems.map((item) => (
              <CategoryCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-purple-500 border-b-2 border-purple-400 pb-1 mb-4">
            Dev Tools +
          </h2>
          <div className="space-y-3">
            {devToolsItems.map((item) => (
              <CategoryCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
