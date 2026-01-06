"use client";
import { CometCard } from "@/components/ui/Comet-card";

interface FrameProps {
  imageSrc: string;
  imageAlt?: string;
}

const Frame = ({ imageSrc, imageAlt = "Post" }: FrameProps) => {
  return (
    <CometCard rotateDepth={12} translateDepth={14}>
      <div className="w-full max-w-[350px] mx-auto bg-white rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px] shadow-sm">
              <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900 leading-none">
                Navs
              </span>
              <span className="text-xs text-gray-500">
                just somewhere existing
              </span>
            </div>
          </div>
          <button className="text-gray-600 pb-2 font-bold text-lg tracking-widest">
            ...
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-[#D97A2B] to-orange-600 shadow-inner">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Actions + Content */}
        <div className="px-3 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4 text-gray-800">
              <svg className="w-6 h-6 hover:text-gray-600 cursor-pointer drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <svg className="w-6 h-6 hover:text-gray-600 cursor-pointer drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              <svg className="w-6 h-6 cursor-pointer drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>

            <svg className="w-6 h-6 hover:text-gray-600 cursor-pointer drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
          </div>

          <div className="font-semibold text-sm mb-1 text-gray-900">
            12,904 likes
          </div>

          <div className="text-sm mb-1 text-gray-900">
            <span className="font-semibold mr-2">navs.codes</span>
            <span>just building cool stuff, one line of code at a time</span>
          </div>

          <div className="text-gray-500 text-sm cursor-pointer">
            View all 342 comments
          </div>
        </div>
      </div>
    </CometCard>
  );
};

export default Frame;
