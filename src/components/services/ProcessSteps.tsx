interface Step {
  number: number
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
  accentColor?: string
}

export default function ProcessSteps({ steps, accentColor = 'bg-corporate-orange' }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -z-10" />
          )}

          {/* Step content */}
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${accentColor} text-white mb-4`}>
              <span className="text-3xl font-bold">{step.number}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-corporate-gray-medium">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
