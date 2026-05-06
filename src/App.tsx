import { useState, useEffect, useRef, type ReactNode } from 'react'

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

/* ─── Section Wrapper ─── */
function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </section>
  )
}

/* ─── Icons ─── */
function IconGrid() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function IconServer() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
    </svg>
  )
}

function IconLink() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function IconContainer() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  )
}

function IconBrain() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a6 6 0 00-6 6c0 1.66.68 3.16 1.76 4.24L12 16.48l4.24-4.24A6 6 0 0012 2z" />
      <path d="M12 16.48V22" />
      <path d="M8 8h.01" />
      <path d="M16 8h.01" />
      <path d="M12 12h.01" />
    </svg>
  )
}

function IconEdge() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4" />
      <path d="M12 19v4" />
      <path d="M4.22 4.22l2.83 2.83" />
      <path d="M16.95 16.95l2.83 2.83" />
      <path d="M1 12h4" />
      <path d="M19 12h4" />
      <path d="M4.22 19.78l2.83-2.83" />
      <path d="M16.95 7.05l2.83-2.83" />
    </svg>
  )
}

function IconArchitecture() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  )
}

function IconDoc() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

function IconScale() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 21H3" />
      <path d="M18 21V8l-6-5-6 5v13" />
      <path d="M9 21v-5h6v5" />
    </svg>
  )
}

function IconIntegration() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 8v3" />
      <path d="M7.5 17l2-4" />
      <path d="M16.5 17l-2-4" />
    </svg>
  )
}

function IconTelegram() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.22s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function IconEmail() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  )
}

/* ─── Expertise Data ─── */
const expertiseItems = [
  { icon: <IconGrid />, title: 'Multi-tenant SaaS', desc: 'Архитектура с изоляцией данных, динамическим шардингом и гранулярным RBAC' },
  { icon: <IconBolt />, title: 'Event-driven системы', desc: 'Kafka, RabbitMQ, event sourcing, CQRS — асинхронная коммуникация без coupling' },
  { icon: <IconServer />, title: 'Highload backend', desc: 'Проектирование backend, выдерживающего рост нагрузки без переписывания с нуля' },
  { icon: <IconLink />, title: 'API и интеграции', desc: 'REST/gRPC/GraphQL, API Gateway, webhook pipeline, идемпотентность' },
  { icon: <IconShield />, title: 'Audit и безопасность', desc: 'Security-first: audit trail, шифрование, compliance, pen-test-ready архитектура' },
  { icon: <IconContainer />, title: 'Kubernetes / Docker', desc: 'Container orchestration, CI/CD pipelines, blue-green деплой, autoscaling' },
  { icon: <IconBrain />, title: 'AI / RAG архитектура', desc: 'Vector DB, retrieval pipeline, LLM governance, AI-интеграции в enterprise' },
  { icon: <IconEdge />, title: 'Edge / offline-first', desc: 'Синхронизация, conflict resolution, local-first для industrial и IoT сценариев' },
]

/* ─── Services Data ─── */
const services = [
  { icon: <IconArchitecture />, title: 'Проектирование архитектуры', desc: 'От идеи до production-ready blueprint. Компоненты, контракты, потоки данных.' },
  { icon: <IconDoc />, title: 'Технические задания', desc: 'Production-ready ТЗ с декомпозицией, приоритетами и критериями приёмки.' },
  { icon: <IconSearch />, title: 'Аудит систем', desc: 'Разбор существующей архитектуры: bottleneck, риски, roadmap оптимизации.' },
  { icon: <IconScale />, title: 'Масштабируемый backend', desc: 'Backend, который растёт вместе с бизнесом. Без переписывания каждые полгода.' },
  { icon: <IconIntegration />, title: 'Интеграции и API', desc: 'Проектирование API, интеграционных слоёв и внешних контрактов.' },
]

/* ─── Cases Data ─── */
const cases = [
  {
    title: 'CRM Enterprise SaaS',
    desc: 'Multi-tenant CRM/ERP платформа для управления заказами, складом, закупками, контейнерной логистикой, финансами, ролями, аудитом и аналитикой.',
    accent: 'blue',
    tags: ['tenant_id isolation', 'event-driven model', 'audit log', 'REST API', 'modular architecture', 'horizontal scaling'],
  },
  {
    title: 'OTP Delivery SaaS',
    desc: 'Отказоустойчивый сервис доставки OTP-кодов через WhatsApp, Telegram и SMS fallback для RetailCRM и внешних систем.',
    accent: 'violet',
    tags: ['fallback engine', 'provider rotation', 'health-check', 'SLA 99.9%', 'Redis TTL', 'multi-tenant settings', 'delivery logs'],
  },
  {
    title: 'Industrial Trust Edge Platform',
    desc: 'Edge-first промышленная платформа для фиксации, интерпретации и доказательной привязки производственных событий.',
    accent: 'emerald',
    tags: ['edge runtime', 'safety loop', 'evidence chain', 'offline autonomy', 'append-only trail', 'deferred sync', 'HAL'],
  },
  {
    title: 'AI Governance / RAG Platform',
    desc: 'Enterprise AI governance архитектура для управляемой AI-разработки и воспроизводимых RAG-процессов.',
    accent: 'purple',
    tags: ['snapshot-centric execution', 'hybrid retrieval', 'validator committee', 'trace graph', 'append-only event store', 'multi-tenant isolation'],
  },
]

/* ─── Situations Data ─── */
const situations = [
  'Система начала расти и появились проблемы с производительностью',
  'Нужно проектировать CRM / SaaS / платформу с нуля',
  'Много интеграций — и они начинают ломаться',
  'Нет понимания, как масштабировать архитектуру',
  'Нужно навести порядок в уже сложной системе',
]

/* ─── Approach Data ─── */
const approachSteps = [
  {
    num: '01',
    title: 'Разбор бизнес-цели',
    label: 'Business',
    desc: 'Определяю, какую задачу система должна решать для бизнеса, где реальные ограничения и что будет критичным при росте.',
  },
  {
    num: '02',
    title: 'Границы и доменная модель',
    label: 'Domain',
    desc: 'Выделяю сущности, роли, контексты, tenant-модель, события и зоны ответственности модулей.',
  },
  {
    num: '03',
    title: 'Архитектурный контур',
    label: 'Architecture',
    desc: 'Проектирую API, данные, очереди, события, аудит, интеграции, безопасность и runtime-слои.',
  },
  {
    num: '04',
    title: 'Масштабирование и отказоустойчивость',
    label: 'Scale & Resilience',
    desc: 'Закладываю горизонтальное масштабирование, fallback-сценарии, observability, деградацию и recovery-механику.',
  },
  {
    num: '05',
    title: 'Production-ready маршрут',
    label: 'Roadmap',
    desc: 'Формирую roadmap реализации: что делать первым, что нельзя откладывать, какие риски закрыть до запуска.',
  },
]

/* ─── Audience Data ─── */
const audience = [
  { title: 'Стартапы', desc: 'Когда нужно заложить правильную архитектуру с первого дня, а не рефакторить через год.' },
  { title: 'Бизнес с ростом', desc: 'Когда текущая система перестаёт справляться и нужна архитектура для следующего этапа.' },
  { title: 'SaaS продукты', desc: 'Мультитенантность, биллинг, onboarding — архитектура для product-led growth.' },
  { title: 'Команды разработки', desc: 'Чёткая архитектура, контракты, документация — чтобы команда двигалась в одном направлении.' },
]

/* ─── App ─── */
export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-bg-primary overflow-hidden">
      {/* Background effects — depth layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px]" />
        {/* Architectural line grid */}
        <div className="absolute inset-0 line-grid" />
      </div>

      {/* ─── NAV ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-mono text-sm text-text-primary tracking-wide">
            <span className="text-accent-blue">{'{'}</span> SK <span className="text-accent-blue">{'}'}</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-text-muted">
            <a href="#expertise" className="hover:text-text-primary transition-colors">Экспертиза</a>
            <a href="#itep" className="hover:text-text-primary transition-colors">ITEP</a>
            <a href="#services" className="hover:text-text-primary transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-text-primary transition-colors">Кейсы</a>
            <a href="#approach" className="hover:text-text-primary transition-colors">Подход</a>
            <a href="#contact" className="hover:text-text-primary transition-colors">Контакт</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center hero-gradient noise-overlay">
        {/* Dot grid only in hero area */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        {/* Radial glow behind text */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-accent-blue/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full relative z-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-20 items-center">
            {/* Left: text */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-border-card bg-bg-secondary/60 backdrop-blur-sm text-xs font-mono text-accent-blue/90 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                System Architecture
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text-primary leading-[1.2] tracking-tight mb-8 max-w-xl">
                Архитектура высоконагруженных систем,
                <br />
                <span className="gradient-text">которые выдерживают рост</span>
              </h1>

              <p className="text-base sm:text-[1.05rem] text-text-secondary leading-[1.75] max-w-lg mb-12">
                Проектирую SaaS, CRM/ERP, highload backend, event-driven и AI&nbsp;governance системы: от требований и архитектуры до production-ready контура.
              </p>

              <div className="text-sm text-text-muted/70 leading-[1.7] max-w-md mb-12">
                Большинство систем ломаются не из-за кода, а из-за архитектуры.
                <br />
                Проблемы начинаются при росте: нагрузка, интеграции, данные, масштабирование.
                <br />
                Я проектирую системы так, чтобы этого не происходило.
              </div>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="https://t.me/logicGrid0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-accent-blue/15 border border-accent-blue/40 text-accent-blue font-medium text-sm cta-glow hover:bg-accent-blue/25 hover:border-accent-blue/60 transition-all duration-500"
                >
                  <IconTelegram />
                  Обсудить проект в Telegram
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="mailto:s06621848@gmail.com"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-bg-secondary/40 border border-border-subtle text-text-muted font-medium text-sm hover:text-text-primary hover:border-border-card hover:bg-bg-secondary/60 transition-all duration-300"
                >
                  <IconEmail />
                  Написать на email
                </a>
              </div>

              {/* Trust line — tech badge */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wide">
                <span className="text-slate-500/40 shrink-0">Ключевые принципы:</span>
                <span className="text-slate-300/80">Multi-tenant SaaS</span>
                <span className="text-slate-600/50">•</span>
                <span className="text-slate-300/80">Event-driven architecture</span>
                <span className="text-slate-600/50">•</span>
                <span className="text-slate-300/80">API / Audit</span>
                <span className="text-slate-600/50">•</span>
                <span className="text-slate-300/80">Highload / Scale</span>
              </div>
            </div>

            {/* Right: photo */}
            <div className="animate-fade-in-up-delay-2 relative">
              <div className="relative">
                {/* Soft blue/purple glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-blue/[0.12] via-transparent to-accent-purple/[0.10] rounded-2xl blur-2xl" />
                <div className="absolute -inset-2 bg-gradient-to-b from-accent-blue/[0.06] to-transparent rounded-xl blur-xl" />

                {/* Image container with depth */}
                <div className="relative rounded-xl overflow-hidden border border-border-card photo-shadow">
                  <img
                    src="/sergey.jpg"
                    alt="Сергей Кузнецов"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/5' }}
                  />
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-bg-primary/[0.06]" />
                </div>

                {/* Subtle corner accent */}
                <div className="absolute -bottom-1.5 -right-1.5 w-20 h-20 border border-accent-blue/[0.08] rounded-lg" />
                <div className="absolute -bottom-1 -right-1 w-12 h-12 border border-accent-purple/[0.06] rounded-md" />

                {/* Floating tech card */}
                <div className="absolute -left-6 bottom-12 px-4 py-3 rounded-lg bg-bg-secondary/70 backdrop-blur-md border border-accent-blue/20 shadow-[0_4px_12px_rgba(0,0,0,0.3)] animate-fade-in-up-delay-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[10px] font-mono text-slate-400/70 tracking-wide">System Status</span>
                    <span className="text-[10px] font-mono text-emerald-400/90">Stable</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500/60">Load-ready architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <Section id="expertise" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-accent-purple tracking-widest uppercase">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3 tracking-tight">
              Области экспертизы
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto">
              Архитектурные паттерны и технологии, которые применяю в production
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertiseItems.map((item, i) => (
              <div
                key={i}
                className="group glass-card rounded-xl p-6 hover:border-accent-blue/30 hover:bg-bg-secondary/80 transition-all duration-500 cursor-default"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-4 group-hover:glow-blue transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── SERVICES ─── */}
      <Section id="services" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">Services</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3 tracking-tight">
              Что я делаю
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div
                key={i}
                className="group glass-card rounded-xl p-8 hover:border-accent-purple/30 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple mb-5 group-hover:glow-purple transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── ITEP PROJECT ─── */}
      <Section id="itep" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-700">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/[0.03] rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border border-emerald-500/20 text-emerald-400/80 bg-emerald-500/[0.06]">
                    Deep-Tech Project
                  </span>
                  <div className="h-px flex-1 bg-border-subtle hidden sm:block" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-4">
                  ITEP — Industrial Trust Edge Platform
                </h2>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
                  Deep-tech проект для промышленной среды, где safety, evidence и trust встроены в edge-first архитектуру.
                </p>

                <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-2xl">
                  ITEP создаёт доверенный слой производственных фактов для industrial AI, audit, claims и operational traceability.
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {['Edge Runtime', 'Evidence Chain', 'Industrial Trust'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-mono border border-emerald-500/15 text-emerald-300/70 bg-emerald-500/[0.04] hover:border-emerald-500/25 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://itep-theta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-sm hover:bg-emerald-500/15 hover:border-emerald-500/50 transition-all duration-500"
                >
                  Посмотреть проект ITEP
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── CASES ─── */}
      <Section id="cases" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">Case Studies</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3 tracking-tight">
              Кейсы сложных систем
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
              Не просто интерфейсы и код, а архитектурные контуры, рассчитанные на рост, отказоустойчивость, аудит и эксплуатацию.
            </p>
          </div>

          <div className="space-y-4">
            {cases.map((item, i) => (
              <div
                key={i}
                className="group glass-card rounded-xl p-8 lg:p-10 hover:border-border-card transition-all duration-500"
              >
                {/* Label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase border ${
                    item.accent === 'blue' ? 'border-blue-500/20 text-blue-400/80 bg-blue-500/5' :
                    item.accent === 'violet' ? 'border-violet-500/20 text-violet-400/80 bg-violet-500/5' :
                    item.accent === 'emerald' ? 'border-emerald-500/20 text-emerald-400/80 bg-emerald-500/5' :
                    'border-purple-500/20 text-purple-400/80 bg-purple-500/5'
                  }`}>
                    Case Study
                  </span>
                  <div className="h-px flex-1 bg-border-subtle" />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-semibold text-text-primary mb-3">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-3xl">{item.desc}</p>

                {/* Architecture focus */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-mono text-text-muted/50 tracking-wide uppercase self-center mr-1">Architecture focus:</span>
                  {item.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-colors duration-300 ${
                        item.accent === 'blue' ? 'border-blue-500/15 text-blue-300/70 bg-blue-500/[0.04] group-hover:border-blue-500/25' :
                        item.accent === 'violet' ? 'border-violet-500/15 text-violet-300/70 bg-violet-500/[0.04] group-hover:border-violet-500/25' :
                        item.accent === 'emerald' ? 'border-emerald-500/15 text-emerald-300/70 bg-emerald-500/[0.04] group-hover:border-emerald-500/25' :
                        'border-purple-500/15 text-purple-300/70 bg-purple-500/[0.04] group-hover:border-purple-500/25'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── SITUATIONS ─── */}
      <Section id="situations" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">Context</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3 tracking-tight">
              Когда ко мне обращаются
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-3">
              {situations.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 px-6 py-4 rounded-lg border border-transparent hover:border-border-card hover:bg-bg-secondary/30 transition-all duration-300 cursor-default"
                >
                  <span className="font-mono text-xs text-accent-blue/40 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── APPROACH ─── */}
      <Section id="approach" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-accent-purple tracking-widest uppercase">Process</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3 tracking-tight">
              Как я подхожу к сложным системам
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
              Я не начинаю с кода. Сначала фиксирую границы системы, риски, данные, нагрузку, интеграции и точки отказа.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-subtle" />

            <div className="space-y-10">
              {approachSteps.map((step, i) => (
                <div
                  key={i}
                  className="group flex gap-8 relative"
                >
                  {/* Timeline node */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-bg-secondary border border-border-card flex items-center justify-center group-hover:border-accent-blue/40 transition-colors duration-500">
                      <span className="text-[10px] font-mono text-text-muted group-hover:text-accent-blue transition-colors duration-500">{step.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-wider uppercase border border-accent-blue/15 text-accent-blue/60 bg-accent-blue/[0.04]">
                        {step.label}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted/80 leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── AUDIENCE ─── */}
      <Section id="audience" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">For whom</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mt-3 tracking-tight">
              Для кого
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 hover:border-accent-blue/20 transition-all duration-500"
              >
                <div className="w-8 h-px bg-gradient-to-r from-accent-blue to-accent-purple mb-5" />
                <h3 className="text-base font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── CTA ─── */}
      <Section id="contact" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-10 sm:p-14 lg:p-16 relative overflow-hidden border border-border-card/80">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/[0.04] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight leading-tight mb-5 max-w-2xl mx-auto">
                  Нужна архитектура, которая{' '}
                  <span className="gradient-text">выдержит рост</span>?
                </h2>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  Если система уже становится сложной — лучше заложить правильный контур до того, как нагрузка, интеграции и данные начнут ломать продукт.
                </p>
              </div>

              {/* 3-point list */}
              <div className="max-w-md mx-auto space-y-3 mb-12">
                {[
                  'разберу текущую задачу',
                  'покажу архитектурные риски',
                  'предложу production-ready маршрут',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-text-muted/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href="https://t.me/logicGrid0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent-blue/15 border border-accent-blue/40 text-accent-blue font-medium text-sm cta-glow hover:bg-accent-blue/25 hover:border-accent-blue/60 transition-all duration-500"
                >
                  <IconTelegram />
                  Написать в Telegram
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="mailto:s06621848@gmail.com"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-bg-secondary/50 border border-border-subtle text-text-secondary font-medium text-sm hover:text-text-primary hover:border-border-card hover:bg-bg-secondary/70 transition-all duration-300"
                >
                  <IconEmail />
                  Отправить email
                </a>
              </div>

              {/* Contact details */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-text-muted/50">
                <a
                  href="https://t.me/logicGrid0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  Telegram: @logicGrid0
                </a>
                <span className="hidden sm:inline text-text-muted/20">·</span>
                <a
                  href="mailto:s06621848@gmail.com"
                  className="hover:text-text-primary transition-colors"
                >
                  s06621848@gmail.com
                </a>
              </div>

              {/* Low-barrier text */}
              <p className="mt-8 text-xs text-text-muted/35 text-center max-w-sm mx-auto">
                Можно просто описать задачу в свободной форме — я отвечу, что с&nbsp;этим делать дальше.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border-subtle py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span className="font-mono">
            <span className="text-accent-blue">{'{'}</span> SK <span className="text-accent-blue">{'}'}</span>
            {' '}
            · System Architecture
          </span>
          <span>© 2025 Сергей Кузнецов</span>
        </div>
      </footer>
    </div>
  )
}
