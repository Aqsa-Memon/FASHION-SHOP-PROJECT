const feedbacks = [
    {
      name: "Maya Singh",
      comment: "The exclusive offers and discounts make it hard to resist shopping here! I was able to grab some amazing pieces at great prices during the sale. Can't wait to wear my new outfits!"
    },
    {
      name: "Liam Johnson",
      comment:"I was impressed by how quickly my order arrived. The clothes are high quality, and I love the unique designs. This shop has become my go-to for all my fashion needs!"
    },
    {
      name: "Olivia Martinez",
      comment: "I had an expert experience shopping on this site! The products are high in quality and innovation, and customer service is top-notch.",
    },
  ];
  
  export default function FeedbackCorner() {
    return (
      <section className="bg-green-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Feedback Corner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-700 italic">{feedback.comment}</p>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feedback.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  