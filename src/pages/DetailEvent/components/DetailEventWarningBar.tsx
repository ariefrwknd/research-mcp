import imgVector1 from '../assets/752391651cefd7f3fb5ba91dcc60e8265f3f6168.svg'
import imgGhwBaruPath1 from '../assets/de6da516c8ccc122e555734f39af802bb0ef2e53.png'
import imgGroup from '../assets/a857d1c8437d39c2e7fd51ca99618a7516422057.svg'
import imgGroup1 from '../assets/7809d8742b52685a17bbdb38685c37fb4cb57cc8.svg'
import imgGroup2 from '../assets/5d4efdf035de6bdb9a20da25d34b140fcd608e61.svg'
import imgGroup3 from '../assets/e51897709656870255d1051877248afaae33f21c.svg'
import imgGroup4 from '../assets/0db19df4802d0b746df3597d4a3eba63af8a7169.svg'
import imgGroup5 from '../assets/ea3b83bdd3bc8ccc6201dd7f5450e4c97980f568.svg'

export function DetailEventWarningBar() {
  return (
    <div className="relative bottom-0 left-1/2 h-auto min-h-[56px] w-full max-w-[1440px] -translate-x-1/2 overflow-hidden py-2 sm:h-14 sm:py-0">
      {/* Warning Text */}
      <div className="absolute left-1/2 top-[6px] -translate-x-1/2 px-4 text-center text-[10px] font-extrabold leading-[13px] text-[#2c2a29] sm:text-xs sm:leading-[15px]">
        <p className="mb-0">PERHATIAN:</p>
        <p className="mb-0">KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN.</p>
        <p>LAYANAN BERHENTI MEROKOK (0800-177-6565)</p>
      </div>
      
      {/* Background Vector */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-14 w-full rotate-180 scale-y-[-100%]">
          <img alt="Vector Background" className="h-full w-full" src={imgVector1} />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-[1.67%] top-[21.43%]">
        <img alt="Group" className="h-full w-full" src={imgGroup} />
      </div>
      <div className="absolute right-[2.07%] top-[41.97%]">
        <img alt="Group" className="h-full w-full" src={imgGroup1} />
      </div>
      <div className="absolute right-[1.67%] top-[21.43%]">
        <img alt="Group" className="h-full w-full" src={imgGroup2} />
      </div>
      <div className="absolute right-[3.14%] top-[41.6%]">
        <img alt="Group" className="h-full w-full" src={imgGroup3} />
      </div>
      <div className="absolute right-[2.53%] top-[41.6%]">
        <img alt="Group" className="h-full w-full" src={imgGroup4} />
      </div>
      <div className="absolute right-[1.98%] top-[44.21%]">
        <img alt="Group" className="h-full w-full" src={imgGroup5} />
      </div>
      
      {/* GHW Logo */}
      <div className="absolute left-[0.2%] top-[7.14%]">
        <img alt="GHW Logo" className="h-full w-full object-cover" src={imgGhwBaruPath1} />
      </div>
    </div>
  )
}

