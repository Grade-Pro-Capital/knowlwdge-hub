"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function BackToPostsLink() {
  const router = useRouter();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleClick = () => {
    setShowConfirmModal(true);
  };

  const cancelLeave = () => {
    setShowConfirmModal(false);
  };

  const confirmLeave = () => {
    setShowConfirmModal(false);
    router.push("/admin/posts");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="text-sm text-[rgba(255,255,255,0.6)] transition-colors hover:text-white"
      >
        ← Posts
      </button>

      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={cancelLeave} />
          <div className="relative w-full max-w-md rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#0B0B0B] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <div className="mb-4 inline-flex rounded-full border border-[#FDBE35]/30 bg-[#FDBE35]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#FDBE35]">
              Confirm navigation
            </div>
            <h3 className="text-xl font-semibold">Are you sure you want to leave?</h3>
            <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
              If you leave this page, any unsaved changes will be lost. Make sure to save your work before navigating away. 
            </p>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={cancelLeave}
                className="rounded-xl border border-[rgba(255,255,255,0.16)] px-4 py-2 text-sm text-white transition-colors hover:bg-[rgba(255,255,255,0.06)]"
              >
                Stay here
              </button>
              <button
                type="button"
                onClick={confirmLeave}
                className="rounded-xl bg-[#FDBE35] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#FDDA93]"
              >
                Yes, leave
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}