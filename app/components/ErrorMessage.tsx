interface ErrorMessageProps {
  error: Error
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="container mx-auto max-w-5xl px-6 my-12">
      <div className="bg-red-50 py-3 px-6 border-2 border-red-200 flex flex-col items-center">
        <h2 className="text-xl font-extrabold mb-2">Something went wrong</h2>
        <p>Error: {error.message}</p>
      </div>
    </div>
  )
}

export default ErrorMessage
