export default function Home() {
  const dummyQuestions = [
    {
      id: 1,
      title: 'What is React Context API?',
      description: 'How does the Context API help manage state across components?'
    },
    {
      id: 2,
      title: 'How to use useEffect with cleanup?',
      description: 'I want to understand cleanup functions inside useEffect for unsubscribing events.'
    },
    {
      id: 3,
      title: 'What is Tailwind CSS?',
      description: 'How does Tailwind CSS differ from traditional CSS frameworks?'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Latest Questions</h2>
      <div className="space-y-4">
        {dummyQuestions.map((q) => (
          <div key={q.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-700">{q.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{q.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}