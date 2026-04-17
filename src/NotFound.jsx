export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-xl">
        <div className="text-7xl font-bold text-red-600">404</div>

        <h1 className="mt-6 text-3xl font-semibold">
          Ты свернул с пути бойца
        </h1>

        <p className="mt-4 text-white/60">
          Даже сильнейшие иногда сбиваются с пути. Главное — вернуться и продолжить тренировку.
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="inline-block rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold hover:bg-red-500 transition"
          >
            Вернуться на путь
          </a>
        </div>

        <div className="mt-12 text-xs uppercase tracking-[0.3em] text-white/30">
          osu
        </div>
      </div>
    </div>
  );
}