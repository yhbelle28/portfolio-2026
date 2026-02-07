"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const fullName = "Yeonhwa Lee";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur border-b border-[#1e293b] z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-[#93c5fd]">
            YEONHWA LEE
          </span>

          <div className="flex items-center gap-2 text-[13px] text-[#cbd5f5]">
            {["home", "about", "skills", "projects"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            <a
              href="https://github.com/Yhbelle28"
              target="_blank"
              className="ml-2 px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-[#020617] text-[#e5e7eb] pt-16">
        {/* Hero */}
        <section id="home" className="relative h-[85vh] min-h-[520px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/web_title.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/90 via-[#020617]/70 to-[#020617]/40" />

          {/* Hero Text */}
          <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex items-center justify-end">
            <div className="max-w-md text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3 drop-shadow-lg text-right">
                <span className="block text-[#e5e7eb]">Hi, I’m</span>
                <span className="block text-[#93c5fd]">
                  {typedName}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              <p className="text-sm md:text-base text-[#cbd5f5] mb-6">
                Computer Vision · AI · Robotics Developer
              </p>
              <div className="flex justify-end gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-md bg-[#2563eb] text-white text-sm font-medium hover:bg-[#1d4ed8] transition"
                >
                  Projects
                </a>

                <a
                  href="https://github.com/Yhbelle28"
                  target="_blank"
                  className="px-4 py-2 rounded-md border border-[#334155] text-[#e5e7eb] text-sm hover:bg-white/10 transition"
                >
                  GitHub
                </a>

                <a
                  href="mailto:yhbelle28@gmail.com"
                  className="px-4 py-2 rounded-md border border-[#334155] text-[#e5e7eb] text-sm hover:bg-white/10 transition"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* About + Skills 오버레이 */}
          <div className="absolute bottom-10 md:bottom-16 left-0 w-full flex justify-start">
            <div className="max-w-5xl mx-auto px-4 flex justify-start w-full">
              <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 max-w-xl xl shadow-xl flex flex-col gap-6">
                {/* About */}
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-[#93c5fd]">About</h2>
                  <p className="text-sm md:text-base text-[#e5e7eb] leading-relaxed">
                    컴퓨터 비전, 딥러닝, 로봇 제어를 중심으로 실제 환경에서
                    동작하는 AI 시스템 구현에 관심이 많습니다.
                  </p>
                </div>

                {/* Skills */}
                <div id="skills">
                  <h2 className="text-2xl font-semibold mb-2 text-[#93c5fd]">Skills</h2>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {["Python", "PyTorch", "OpenCV", "YOLO", "Lerobot"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="text-xs md:text-sm text-[#e5e7eb] font-small hover:text-[#2563eb] transition"
                        >
                          #{skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="px-4 py-20 border-t border-[#cbd5f5] relative"
          style={{ backgroundColor: "#f8fafc" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
            {[
              {
                title: "개인 맞춤형\nAI 여행 비서",
                desc: "사용자의 위치(GPS)와 일정을 실시간으로 분석하여 묻기 전에 필요한 현지 문화 및 안전 정보를 제공하는 선제적(Proactive) 가이드 서비스. n8n과 RAGFlow를 연동한 AI 워크플로우를 기반으로 Appsmith를 활용해 빠르게 MVP를 구축.",
                tags: ["n8n", "Prompt Engineering", "Prototyping"],
                date: "2025.11.10-2025.11.15",
                link: "projects/pj_travel",
              },
              {
                title: "AI Vision 기반\n공정 자동화 시스템",
                desc: "YOLOv5s 모델을 활용한 고속 비전 검사와 PLC 및 협동로봇 제어를 결합한 공정 자동화 시스템. 딥러닝 기반의 객체 인식 기술을 생산 라인에 직결하여, 실시간 불량 검출부터 자동 배출(Sorting)까지 모든 과정을 지연 없이 처리하는 End-to-End 솔루션을 구현.",
                tags: ["YOLOv5", "PLC", "Robot", "Python", "Smart Factory"],
                date: "2025.11.27-2025.12.23",
                link: "projects/pj_fusebox",
              },
              {
                title: "smolVLA + Pi0\n로봇 구동",
                desc: "smolVLA와 Pi0로 Dobot Magician 로봇 구동. 데이터 수집, 학습, 동작 테스트.",
                tags: ["smolVLA", "Pi0", "Dobot", "Python", "Robotics"],
                date: "2026.01.23-2026.02.06",
                link: "projects/pj_dobot",
              },
            ].map((proj, idx) => (
              <Link key={idx} href={proj.link} className="flex-1 relative flex flex-col justify-start bg-white min-h-[400px] p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                {/* 상단 굵은 라인 (About 색) */}
                <div className="w-full h-1 bg-[#93c5fd] mb-3"></div>

                {/* [추가됨] Project Number Label */}
                <span className="text-[11px] font-bold text-[#60a5fa] tracking-wider uppercase mb-1">
                  Project {idx + 1}
                </span>

                {/* 프로젝트 제목 */}
                <h3 className="text-xl font-bold text-[#1e293b] mb-3 whitespace-pre-line leading-tight">
                  {proj.title}
                </h3>

                {/* 설명 */}
                <p className="text-sm md:text-base text-[#334155] mb-6">{proj.desc}</p>

                {/* 날짜 */}
                <p className="text-[13px] text-[#334155] mt-auto">{proj.date}</p>

                {/* 스킬 바로 위 메모장 줄 */}
                <div className="w-full border-b border-[#cbd5f5] mt-4"></div>

                {/* 스킬 태그 */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-gray-500 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-[#94a3b8] border-t border-[#1e293b] space-y-2">
          <p className="text-[11px] text-[#64748b]">
            Email: yhbelle28@gmail.com | 010-6701-7856 
          </p>
          <p className="text-[11px] text-[#64748b]">
            © 2026 Yeonhwa Lee · Portfolio
          </p>
        </footer>
      </main>
    </>
  );
}