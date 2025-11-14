import img8 from '../assets/7f95843063af7dfd3ca017c1c43eb70e1330bf1e.svg'
import { navigateTo } from '../../../services/navigation'

export function DetailEventBackButton() {
  const handleBack = () => {
    navigateTo('/oneux')
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="mb-4 flex items-center gap-[5px] rounded-[10px] bg-white p-[10px] transition-colors hover:bg-neutral-50 md:absolute md:left-[30px] md:top-[102.5px] md:mb-0"
    >
      <div className="relative h-5 w-5 shrink-0 overflow-hidden">
        <img alt="Arrow Left" className="h-full w-full" src={img8} />
      </div>
      <p className="text-xs font-bold leading-normal tracking-[0.25px] text-[#2c2a29]">Kembali</p>
    </button>
  )
}

