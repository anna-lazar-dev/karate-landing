export default function App() {
  const navItems = [
    { label: 'Главная', href: '#home' },
    { label: 'О клубе', href: '#about' },
    { label: 'Запись', href: '#contact' },
  ];

  const features = [
    {
      title: 'Традиции и дисциплина',
      text: 'Обучаем на базе принципов кёкусинкай: уважение, сила духа, характер и постоянный рост.',
    },
    {
      title: 'Для детей и взрослых',
      text: 'Группы для новичков и продолжающих, с вниманием к уровню подготовки и возрасту.',
    },
    {
      title: 'Современный подход',
      text: 'Структурированные тренировки, безопасная нагрузка и понятная система прогресса.',
    },
  ];

  const stats = [
    { value: '10+', label: 'лет опыта' },
    { value: '200+', label: 'учеников' },
    { value: '3', label: 'уровня подготовки' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Логотип Hajime Dojo"
              className="h-10 w-10 object-cover rounded-full border border-white/10 bg-black"
              />
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/60">Hajime Dojo</div>
              <div className="text-base font-semibold">Клуб единоборств</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-500"
          >
            Записаться
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                Сила · Дисциплина · Характер
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Клуб единоборств
                <span className="block text-red-600">Hajime Dojo</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Современная школа для детей, подростков и взрослых. Тренировки, которые развивают тело,
                уверенность и внутреннюю силу.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-red-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  Оставить заявку
                </a>
                <a
                  href="#about"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Узнать о клубе
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-red-600/20 blur-3xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-white/50">Путь бойца</p>
                      <h2 className="mt-2 text-2xl font-semibold">Тренируй тело. Закаляй дух.</h2>
                    </div>
                    <div className="h-14 w-14 rounded-2xl bg-red-600" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                        <div className="text-3xl font-semibold text-red-600">{stat.value}</div>
                        <div className="mt-2 text-sm text-white/60">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-red-600">О клубе</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Место, где воспитывается сила характера
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  Наш клуб единоборств объединяет классические ценности кёкусинкай и современную организацию тренировок.
                  Мы помогаем ученикам становиться сильнее физически, увереннее психологически и устойчивее в жизни.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
                  В основе занятий — техника, выносливость, дисциплина, уважение к наставнику и развитие боевого духа.
                  Тренировки подходят как для тех, кто делает первый шаг, так и для тех, кто хочет расти дальше и
                  готовиться к аттестациям и соревнованиям.
                </p>
              </div>

              <div className="grid gap-4">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-black p-6 transition hover:border-red-600/40 hover:bg-white/[0.02]"
                  >
                    <div className="mb-4 h-1.5 w-14 rounded-full bg-red-600" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-red-600">Обратная запись</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Оставьте заявку на первое занятие
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  Заполните форму, и мы свяжемся с вами, расскажем о расписании, группах и подберем удобное время.
                </p>

                <div className="mt-10 space-y-4 text-sm text-white/60">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    Телефон: +7 (909) 521-02-77
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    Адрес: г.Новокузнецк, ул. Зыряновская 81, 3 этаж
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    График: ежедневно с 09:00 до 21:00
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
                <form className="grid gap-5">
                  <div>
                    <label className="mb-2 block text-sm text-white/70">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Введите имя"
                      className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Возраст ученика</label>
                    <select className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-600">
                      <option>Выберите категорию</option>
                      <option>Дети 3–8 лет</option>
                      <option>Дети 9–13 лет</option>
                      <option>Подростки 14–17 лет</option>
                      <option>Взрослые 18+</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">Комментарий</label>
                    <textarea
                      rows={5}
                      placeholder="Например: интересует пробное занятие"
                      className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                  >
                    Отправить заявку
                  </button>

                  <p className="text-xs leading-6 text-white/40">
                    Нажимая на кнопку, вы соглашаетесь на обработку персональных данных.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>© 2026 Клуб единоборств Кушинкай</div>
          <div className="uppercase tracking-[0.25em]">Osu</div>
        </div>
      </footer>
    </div>
  );
}
