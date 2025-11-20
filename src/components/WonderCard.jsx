export default function WonderCard({ title, location, description, image, year }) {
  return (
    <article className="group bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="h-56 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
          {year && <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{year}</span>}
        </div>
        <p className="text-sm text-slate-500 mb-3">{location}</p>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
