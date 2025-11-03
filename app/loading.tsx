export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-scaleIn">
        <div className="w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
