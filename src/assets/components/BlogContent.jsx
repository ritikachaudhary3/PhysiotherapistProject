import React from "react";

const BlogContent = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
        
        {/* Intro Paragraphs */}
        <p>
          Experts agree that good posture is critical to back health. While reminding yourself to sit up straight and not slouch throughout the day is a great starting point, there are also many exercises that can help improve posture—and everyone can benefit from performing them.
        </p>
        <p>
          "Our tissues and muscles adapt to the postures we put them through," said Darren Tomasso, Nike Well Collective Trainer, NASM-PES and USAFT-certified running coach. "If we sit at our desk in front of a computer most of the day, our bodies are going to get really good at being in that position—shoulders rounded and shrugged, head jutting forwards, pelvis rotated [and] spine compressed."
        </p>
        <p>
          He added that when physical posture changes, it can also cause muscular imbalances to develop. This can spur weakness in muscle groups, leading to a limited range of motion, and may even cause pain or discomfort when completing daily activities and workouts.
        </p>
        <p>
          For these reasons, consider adding the below exercises for improved posture to your routine—each one targets different areas of the body, so be sure to do them all if you can.
        </p>

        {/* Repeated line (optional) */}
        <p>
          For these reasons, consider adding the below exercises for improved posture to your routine—each one targets different areas of the body, so be sure to do them all if you can.
        </p>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800">
          5 exercises to improve posture
        </h2>

        {/* Exercise List */}
        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num}>
              <h3 className="text-lg font-semibold text-gray-800">
                {num}. Diaphragmatic breathing
              </h3>
              <p className="mt-2">
                Learning to breathe effectively through the low ribcage and diaphragm will assist in automatically stacking the shoulders over the pelvis without forcing the shoulders back or arching through the lower back," she said.
                <br />
                "The lateral expansion of the low ribcage gently lifts the chest, while allowing you to sit in a more upright and relaxed position."
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogContent;