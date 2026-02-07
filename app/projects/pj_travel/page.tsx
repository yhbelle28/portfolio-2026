"use client";

import Link from "next/link";
import Image from "next/image";

export default function PjCala() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur border-b border-[#1e293b] z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-[#93c5fd]">
            YEONHWA LEE
          </span>

          <div className="flex items-center gap-2 text-[13px] text-[#cbd5f5]">
            <a
              href="/#home"
              className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
            >
              Home
            </a>
            <a
              href="/#about"
              className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
            >
              About
            </a>
            <a
              href="/#skills"
              className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
            >
              Skills
            </a>
            <a
              href="/#projects"
              className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
            >
              Projects
            </a>

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
        
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/web_title.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/90 via-[#020617]/70 to-[#020617]/40" />

          <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex items-center justify-end">
            <div className="max-w-2xl text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3 drop-shadow-lg">
                <span className="block text-[#e5e7eb]">Project</span>
                <span className="block text-[#93c5fd]">
                  개인 맞춤형<br />AI 여행 비서
                </span>
              </h1>
              <p className="text-sm md:text-base text-[#cbd5f5] mt-4">
                "검색하지 않아도, 상황에 맞춰 먼저 알려주는 AI"<br className="hidden md:block"/>
                위치/일정 기반의 선제적 문화 가이드 및 여행 편의 서비스 기획
              </p>
            </div>
          </div>
        </section>

        {/* Project Content Layout */}
        <section className="px-4 py-16 bg-[#f8fafc] text-[#1e293b]">
          <div className="max-w-6xl mx-auto">
            
            {/* 상단 굵은 라인 */}
            <div className="w-full h-1 bg-[#93c5fd] mb-12"></div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              
              {/* [Left Column] Image Area - 수정됨: 이미지 2장 배치 */}
              <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-8 lg:top-24">
                 
                 {/* Image 1: System Architecture */}
                 <div>
                    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-100 p-2 overflow-hidden">
                       <Image
                          src="/pj_trav_img4.png"
                          alt="CALA Service Architecture"
                          width={800} 
                          height={600}
                          className="w-full h-auto rounded-lg"
                       /> 
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">▲ n8n & RAGFlow 기반 시스템 구조도</p>
                 </div>

                 {/* Image 2: UI/UX Flow */}
                 <div>
                    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-100 p-2 overflow-hidden">
                       <Image
                          src="/pj_trav_img5.png"
                          alt="CALA UI Flow"
                          width={800} 
                          height={1200}
                          className="w-full h-auto rounded-lg"
                       /> 
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">▲ Appsmith 여행 비서 UI 프로토타입</p>
                 </div>

              </div>

              {/* [Right Column] Text Content Area */}
              <div className="flex-1 flex flex-col gap-10">
                 
                 {/* Header Info */}
                 <div>
                    <h2 className="text-3xl font-bold mb-2 leading-tight">Context-Aware Travel AI Agent</h2>
                    <p className="text-[#64748b] font-medium mb-6">
                       Role: Frontend Development & UI/UX Design (Appsmith)
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                       <div>
                          <h3 className="font-semibold text-[#2563eb] mb-2 text-sm flex items-center gap-2">🛠️ Tech Stack (Prototype)</h3>
                          <p className="text-sm text-[#334155] leading-relaxed">
                            Appsmith, n8n, Claude (MCP), RAGFlow, Google Sheets
                          </p>
                       </div>
                       <div>
                          <h3 className="font-semibold text-[#2563eb] mb-2 text-sm flex items-center gap-2">🎯 Key Focus</h3>
                          <p className="text-sm text-[#334155] leading-relaxed">
                            LCNC(Low-Code/No-Code) 개발, AI Agent 설계, UX Flow 기획
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* 1. Project Background */}
                 <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">1. Background & Pain Point</h3>
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                        <p className="text-[#334155] text-sm leading-relaxed mb-3">
                           해외여행 시 <strong>'문화적 차이'</strong>와 <strong>'안전 정보 부재'</strong>는 여행자의 경험을 저해하는 가장 큰 요소입니다. 기존 여행 앱은 사용자가 직접 검색해야 하는 <strong>수동성(Passive)</strong>의 한계가 있었습니다.
                        </p>
                        <div className="pl-4 border-l-2 border-red-300 bg-red-50/50 py-2 pr-2 rounded-r-md">
                            <span className="text-red-500 font-bold block mb-1 text-xs">Target Problem</span>
                            <p className="text-sm text-[#475569]">
                                "현지 식당 예절을 몰라 실수하거나, 위험 지역인지 모르고 방문하는 문제 해결 필요"
                            </p>
                        </div>
                    </div>
                 </div>

                 {/* 2. Solution Concept */}
                 <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">2. Solution Concept</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-[#1e293b] text-lg mb-2">
                        선제적 가이드 (Proactive Guidance)
                      </h4>
                      <p className="text-sm text-[#334155] leading-relaxed mb-3">
                        사용자가 묻기 전에 AI가 <strong>위치(GPS)와 일정(Time)</strong>을 분석하여 필요한 정보를 먼저 제공합니다.
                      </p>
                      <ul className="list-disc list-inside text-[#334155] text-sm space-y-1 ml-2 bg-slate-50 p-3 rounded-md">
                        <li><span className="font-semibold">Situation:</span> 식당 방문 10분 전</li>
                        <li><span className="font-semibold">AI Action:</span> "일본에서는 젓가락을 밥에 꽂으면 안 됩니다" (문화 팁 푸시 알림)</li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-[#1e293b] text-lg mb-2">
                         시스템 아키텍처 (No-Code Integration)
                      </h4>
                      <p className="text-sm text-[#334155] leading-relaxed">
                        빠른 프로토타이핑을 위해 <strong>MCP(Model Context Protocol)</strong> 개념을 도입하여 다양한 AI 도구를 연결했습니다.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs">
                         <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md font-medium">Appsmith (Frontend)</span>
                         <span className="text-gray-400">→</span>
                         <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-md font-medium">n8n (Workflow)</span>
                         <span className="text-gray-400">→</span>
                         <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md font-medium">RAGFlow (Knowledge)</span>
                         <span className="text-gray-400">→</span>
                         <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md font-medium">Claude (Generation)</span>
                      </div>
                    </div>
                  </div>
                 </div>

                 {/* 3. My Role & Contribution */}
                 <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">3. Role: Frontend & UI Design</h3>
                    <div className="bg-slate-100 p-6 rounded-xl text-sm text-[#334155] border border-slate-200">
                       <ul className="space-y-4">
                          <li className="flex gap-3">
                             <span className="shrink-0 flex items-center justify-center w-6 h-6 bg-[#2563eb] text-white rounded-full font-bold text-xs">1</span>
                             <div>
                                <h4 className="font-bold text-[#1e293b]">Appsmith 기반 앱 인터페이스 구축</h4>
                                <p className="text-xs text-gray-500 mt-1">
                                   복잡한 코딩 없이 Drag & Drop 방식으로 '여행 전/중/후'의 3단계 UX 시나리오를 빠르게 시각화하고 구현했습니다.
                                </p>
                             </div>
                          </li>
                          <li className="flex gap-3">
                             <span className="shrink-0 flex items-center justify-center w-6 h-6 bg-[#2563eb] text-white rounded-full font-bold text-xs">2</span>
                             <div>
                                <h4 className="font-bold text-[#1e293b]">API 데이터 시각화</h4>
                                <p className="text-xs text-gray-500 mt-1">
                                   n8n 워크플로우에서 넘어오는 JSON 형태의 AI 응답(일정, 안전 정보)을 파싱하여, 사용자 친화적인 '카드 UI' 형태로 변환했습니다.
                                </p>
                             </div>
                          </li>
                          <li className="flex gap-3">
                             <span className="shrink-0 flex items-center justify-center w-6 h-6 bg-[#2563eb] text-white rounded-full font-bold text-xs">3</span>
                             <div>
                                <h4 className="font-bold text-[#1e293b]">사용자 시나리오 설계</h4>
                                <p className="text-xs text-gray-500 mt-1">
                                   'AI 렌즈(사진 분석)'와 '실시간 알림' 기능을 직관적으로 사용할 수 있도록 메뉴 구조와 네비게이션을 설계했습니다.
                                </p>
                             </div>
                          </li>
                       </ul>
                    </div>
                 </div>

                 {/* 4. Retrospective */}
                 <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">4. Retrospective</h3>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2 text-lg">
                         💡 Project Takeaways
                      </h4>
                      <div className="space-y-4">
                         <div className="pl-4 border-l-2 border-blue-300">
                            <span className="text-blue-600 font-bold block mb-1 text-xs uppercase tracking-wider">Rapid Prototyping</span>
                            <p className="text-sm text-[#334155]">
                               2박 3일이라는 짧은 시간 안에 아이디어를 검증 가능한 형태(MVP)로 만드는 과정을 통해, <strong>No-Code 툴의 생산성</strong>과 <strong>API 연동 구조</strong>에 대한 깊은 이해를 얻었습니다.
                            </p>
                         </div>
                         <div className="pl-4 border-l-2 border-purple-300">
                            <span className="text-purple-600 font-bold block mb-1 text-xs uppercase tracking-wider">Challenge</span>
                            <p className="text-sm text-[#334155]">
                               LLM의 응답 속도(Latency)와 정형화되지 않은 출력값을 UI에 매핑하는 과정에서 어려움이 있었으나, <strong>프롬프트 엔지니어링을 통한 출력 포맷 고정(JSON)</strong>으로 해결책을 모색했습니다.
                            </p>
                         </div>
                      </div>
                    </div>
                 </div>

                 {/* Footer Skills & Back Button */}
                 <div className="mt-4 pt-8 border-t border-[#cbd5f5]">
                    <div className="flex flex-wrap gap-3">
                      {["Product Planning", "UX Design", "Appsmith", "No-Code", "AI Agent", "RAG Concept"].map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-[#64748b] font-medium hover:text-[#2563eb] hover:border-[#2563eb] transition">
                          #{skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Link href="/#projects" className="px-6 py-2 rounded-sm bg-[#2563eb] text-white text-sm font-medium hover:bg-[#1d4ed8] transition shadow-md">
                        Back to Home
                      </Link>
                    </div>
                 </div>

              </div> {/* End of Right Column */}
            </div>
            
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs text-[#94a3b8] border-t border-[#1e293b] space-y-2">
          <p className="text-[11px] text-[#64748b]">Email: yhbelle28@gmail.com | Portfolio</p>
          <p className="text-[11px] text-[#64748b]">© 2026 Yeonhwa Lee</p>
        </footer>
      </main>
    </>
  );
}