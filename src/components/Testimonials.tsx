import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Theresa Howe",
    location: "Mesa, AZ",
    rating: 5,
    text: "Called Lou last night as my AC was not working, got an appointment for first thing this morning, Andrew arrived timely, diagnosed the issue and had my unit up and running in no time and no upselling, very reasonable price. Thank you All Valley Air for your promptness, fairness and courtesy.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocITOoGnOZ2NKneSdFanJZBJxwiK687pIMuAzYVmENMTeamf9g=s1920-c-rp-mo-ba2-br100",
  },
  {
    name: "Garrett Proctor",
    location: "Mesa, AZ",
    rating: 5,
    text: "Lou was very informative and precise fixing our AC unit. He took his time to answer any questions we had which made us feel even more confident we chose the right company for our HVAC needs. We need more honest and willing to help companies like All Valley Air Inc.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXinP66iRw-QujxD638cBgun04bBjSEacEGE0fd6ZkMzRB3eVE=s1920-c-rp-mo-br100",
  },
  {
    name: "Jeremy Skaggs",
    location: "Mesa, AZ",
    rating: 5,
    text: "Lou and his team of hardworking professionals are the absolute best in the business! I know there are many choices out there, and no matter what - a costly repair or replacement is stressful for most... They are fantastic! You don't find companies like this outside of small towns very often.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUvDetEUzZQX9z29npRaFOKevG651NTOUWY29emjW5vrjNV4Qs=s1920-c-rp-mo-ba2-br100",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" /> 5-Star Rated Service
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-slate-600">
            Join hundreds of satisfied homeowners across the Valley who trust All Valley Air for their comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 w-12 h-12 group-hover:text-purple-100 transition-colors" />

              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <span className="text-sm text-slate-500">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
