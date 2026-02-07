"use client";

import Link from "next/link";
import Image from "next/image";

export default function PjFusebox() {
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
                  AI Vision 기반<br />공정 자동화 시스템
                </span>
              </h1>
              <p className="text-sm md:text-base text-[#cbd5f5] mt-4">
                YOLOv5s 기반 비전 검사와 PLC/로봇 제어를 연동하여<br className="hidden md:block"/>
                실시간 불량 검출 및 공정 자동화를 구현한 프로젝트입니다.
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
              
              {/* [Left Column] Image Area */}
              <div className="w-full lg:w-[400px] shrink-0 lg lg:top-24">
                 <div className="w-full bg-white -xl shadow-lg border border-gray-100 p-2">
                    <Image
                       src="/pj_fuse_img1.png"
                       alt="Fusebox Process Diagram"
                       width={800} 
                       height={2500}
                       className="w-full h-auto lg"
                       priority
                    />
                 </div>
                 <p className="text-center text-xs text-gray-400 mt-3">▲ 전체 공정 프로세스 구조도</p>
              </div>

              {/* [Right Column] Text Content Area */}
              <div className="flex-1 flex flex-col gap-10">
                 
                 {/* Header Info */}
                 <div>
                    <h2 className="text-3xl font-bold mb-2 leading-tight">YOLOv5 기반 지능형 퓨즈 박스 검사</h2>
                    <p className="text-[#64748b] font-medium mb-6">
                       Role: Computer Vision & System Integration (Main Developer)
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <div>
                           <h3 className="font-semibold text-[#2563eb] mb-2 text-sm flex items-center gap-2">🛠️ Tech Stack</h3>
                           <p className="text-sm text-[#334155] leading-relaxed">
                             Python, YOLOv5s, Roboflow, Socket/Serial Communication
                           </p>
                        </div>
                        <div>
                           <h3 className="font-semibold text-[#2563eb] mb-2 text-sm flex items-center gap-2">🤖 Hardware</h3>
                           <p className="text-sm text-[#334155] leading-relaxed">
                             Mitsubishi PLC, Neuromeka Indy7 (협동로봇), Conveyor System
                           </p>
                        </div>
                    </div>
                 </div>

                 {/* 1. Project Overview */}
                 <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">1. Project Overview</h3>
                    <p className="text-[#334155] leading-relaxed bg-white/50 p-4 rounded-lg border border-gray-100">
                       제조 공정 내 퓨즈 박스 조립 상태를 실시간으로 자동 검사하여 불량 유출을 방지하고 생산 효율을 극대화하는 자동화 시스템을 구축했습니다. 단순 AI 모델링을 넘어, PLC 및 협동 로봇과 통신하며 전체 공정 라인을 제어하는 End-to-End 시스템입니다.
                    </p>
                 </div>

                 {/* 2. Key Contributions */}
                 <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">2. Key Contributions</h3>
                  
                  <div className="space-y-4">
                    {/* Vision Part */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md">
                      <h4 className="font-bold text-[#1e293b] text-lg mb-3 flex items-center gap-2">
                        데이터 엔지니어링 및 모델 학습
                      </h4>
                      <ul className="list-disc list-inside text-[#334155] text-sm space-y-2 ml-2">
                        <li><span className="font-semibold text-[#1e293b]">실환경 데이터 수집:</span> 가동 중인 컨베이어 환경의 조명 및 진동 변수를 반영한 데이터셋 확보.</li>
                        <li><span className="font-semibold text-[#1e293b]">데이터 고도화:</span> Roboflow를 활용한 라벨링 및 Data Augmentation(회전, 밝기 조절 등)으로 다양한 환경에서 견고한 성능 구현.</li>
                        <li><span className="font-semibold text-[#1e293b]">모델 경량화 및 최적화:</span> 실시간 판독 속도 확보를 위해 YOLOv5s 모델 선정 및 공정 속도 최적화.</li>
                      </ul>
                    </div>

                    {/* Logic Part */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md">
                      <h4 className="font-bold text-[#1e293b] text-lg mb-3 flex items-center gap-2">
                        시스템 통합 및 제어 로직
                      </h4>
                      <ul className="list-disc list-inside text-[#334155] text-sm space-y-2 ml-2">
                        <li><span className="font-semibold text-[#1e293b]">Vision-PLC 연동:</span> Python의 predict 결과를 Socket/Serial 통신으로 PLC에 전달(OK/NG 신호).</li>
                        <li><span className="font-semibold text-[#1e293b]">공정 시퀀스 설계:</span> 비전 검사 결과에 따라 후속 공정(Indy7 통전 검사, 실린더 배출)이 유기적으로 작동하도록 인터락(Interlock) 로직 구현.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. System Workflow */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">3. System Workflow</h3>
                  <div className="bg-slate-100 p-6 rounded-xl text-sm text-[#334155] border border-slate-200">
                    <ol className="relative border-l border-gray-300 ml-3 space-y-6">
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">1</span>
                        <h4 className="font-bold text-[#2563eb]">공급 및 이송</h4>
                        <p className="text-xs text-gray-500 mt-1">퓨즈 박스 자동 공급 및 컨베이어 이송</p>
                      </li>
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">2</span>
                        <h4 className="font-bold text-[#2563eb]">비전 검사 (담당)</h4>
                        <p className="text-xs text-gray-500 mt-1">YOLOv5s를 이용한 퓨즈 장착 여부 및 오장착 실시간 판독</p>
                      </li>
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">3</span>
                        <h4 className="font-bold text-[#2563eb]">통전 검사 연동</h4>
                        <p className="text-xs text-gray-500 mt-1">비전 양품 판정 시, Indy7 로봇이 투입되어 전기적 특성 검사 진행</p>
                      </li>
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">4</span>
                        <h4 className="font-bold text-[#2563eb]">불량 배출</h4>
                        <p className="text-xs text-gray-500 mt-1">비전/통전 검사 중 하나라도 불량 시, 실린더 구동 → 서보 창고 배출</p>
                      </li>
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">5</span>
                        <h4 className="font-bold text-[#2563eb]">후공정</h4>
                        <p className="text-xs text-gray-500 mt-1">양품 대상 뚜껑 결합(로봇) → 결합 여부 2차 비전 검사 → 최종 적재</p>
                      </li>
                      
                    </ol>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2 text-base">
                        Logic Flowchart (상세 제어 흐름)
                    </h4>
                    <div className="w-full bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                        <Image
                            src="/pj_fuse_img3.png" 
                            alt="System Logic Flowchart"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                  </div>
                </div>

                {/* 4. Results & Troubleshooting */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">4. Key Results & Troubleshooting</h3>
                  
                  <div className="space-y-5">
                    {/* Key Results */}
                    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                       <span className="font-bold text-blue-800 block mb-2 text-lg">🏆 핵심 성과</span>
                       <ul className="list-disc list-inside text-sm text-[#334155] space-y-2">
                         <li><span className="font-semibold">검사 정확도 달성:</span> 최적화된 YOLOv5s 모델을 통해 최대 <span className="text-blue-600 font-bold">95%의 검사 정확도(mAP)</span> 확보.</li>
                         <li><span className="font-semibold">검사 자동화:</span> 수동 검사를 대체하여 시간 단축 및 오판독률 최소화.</li>
                         <li><span className="font-semibold">종합 제어 역량:</span> AI 뿐만 아니라 PLC, 로봇 통신을 통한 End-to-End 자동화 라인 직접 제어 경험 확보.</li>
                       </ul>
                    </div>

                    {/* Troubleshooting Case Study */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2 text-lg">
                        🛠️ 실환경 한계 극복 및 개선 (Troubleshooting)
                      </h4>
                      <div className="space-y-4">
                        <div className="pl-4 border-l-2 border-red-300">
                           <span className="text-red-500 font-bold block mb-1 text-xs uppercase tracking-wider">Problem</span>
                           <p className="text-sm text-[#334155]">
                             고정된 환경에서는 정확도가 높았으나, 컨베이어 벨트 이송 속도 변화에 따라 <strong>모션 블러(Motion Blur)</strong>가 발생하여 판독 정확도가 요동침.
                           </p>
                        </div>
                        <div className="pl-4 border-l-2 border-yellow-300">
                           <span className="text-yellow-600 font-bold block mb-1 text-xs uppercase tracking-wider">Analysis</span>
                           <p className="text-sm text-[#334155]">
                             프레임 획득 속도(FPS)와 공정 속도 사이의 동기화 문제 및 노출 시간(Exposure Time) 설정의 중요성 파악.
                           </p>
                        </div>
                        <div className="pl-4 border-l-2 border-blue-300 bg-blue-50/30 py-2 rounded-r-lg">
                           <span className="text-blue-600 font-bold block mb-1 text-xs uppercase tracking-wider">Solution</span>
                           <p className="text-sm text-[#334155]">
                             1. <strong>하드웨어 트리거(Trigger)</strong> 연동을 통해 촬영 시점을 정밀 제어하여 가변 속도에 대응.<br/>
                             2. 데이터 증강(Augmentation) 시 <strong>Blur 필터</strong>를 추가 학습하여 모델의 강건성(Robustness) 확보.
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하단 구분선 & Skills */}
                <div className="mt-4 pt-8 border-t border-[#cbd5f5]">
                   <div className="flex flex-wrap gap-3">
                     {["YOLO", "Python", "OpenCV", "PLC", "Neuromeka", "Smart Factory", "Roboflow", "Socket/Serial"].map((skill) => (
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
          <p className="text-[11px] text-[#64748b]">Email: yhbelle28@gmail.com | 010-6701-7856</p>
          <p className="text-[11px] text-[#64748b]">© 2026 Yeonhwa Lee · Portfolio</p>
        </footer>
      </main>
    </>
  );
}