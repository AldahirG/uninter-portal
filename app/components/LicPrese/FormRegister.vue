
<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  script: [
    {
      src: "https://link.superleads.mx/js/form_embed.js",
      defer: true
    }
  ]
});
</script>

<template>
  <section id="formulario-registro" class="reg-section">
    <div class="uninter-container">
      <div class="reg-card">
        <div class="reg-form-side">
          <iframe 
            src="https://link.superleads.mx/widget/form/6rkDqSG2V8BZNsczD2wL" 
            style="width:100%;height:560px;border:none;border-radius:4px;overflow:hidden;" 
            id="inline-6rkDqSG2V8BZNsczD2wL" 
            data-layout="{'id':'INLINE'}" 
            data-trigger-type="alwaysShow" 
            data-trigger-value="" 
            data-activation-type="alwaysActivated" 
            data-activation-value="" 
            data-deactivation-type="neverDeactivate" 
            data-deactivation-value="" 
            data-form-name="FormUniversidad" 
            data-height="844" 
            data-layout-iframe-id="inline-6rkDqSG2V8BZNsczD2wL" 
            data-form-id="6rkDqSG2V8BZNsczD2wL" 
            title="FormUniversidad"
          ></iframe>
        </div>
        <div class="reg-mascot-side">
          <div class="mascot-wrap">
            <img src="/images/forms/legi-mascot.png" alt="Mascota Legi UNINTER" class="mascot-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


.uninter-container{margin:0 auto;max-width:1100px;padding:0 1.5rem}
.reg-section{background:#eef2f6;padding:5rem 0}
.reg-card{background:#fff;border-radius:24px;box-shadow:0 24px 60px #003b5c1f;display:flex;min-height:580px;overflow:hidden}
.reg-form-side{flex:1.25;justify-content:center;padding:2rem}
.reg-form-side,.reg-success{display:flex;flex-direction:column}
.reg-success{align-items:center;gap:.875rem;padding:2rem 0;text-align:center}
.success-icon{color:#10b981}
.success-title{color:#003b5c;font-family:var(--font-serif,Georgia,serif);font-size:1.8rem;font-weight:800;margin:0}
.success-desc{color:#475569;font-size:.95rem;line-height:1.6;margin:0;max-width:340px}
.success-desc strong{color:#003b5c}
.reg-eyebrow{align-items:center;background:#f0f6fc;border-radius:20px;color:#0073b4;display:inline-flex;font-size:.75rem;font-weight:700;gap:.4rem;margin-bottom:1rem;padding:.35rem .75rem}
.reg-title{color:#003b5c;font-family:var(--font-serif,Georgia,serif);font-size:clamp(1.7rem,3vw,2.2rem);font-weight:800;line-height:1.15;margin:0 0 .5rem}
.reg-subtitle{color:#4a657a;font-size:.9rem;line-height:1.55;margin:0 0 2rem}
.reg-form{gap:1rem}
.reg-field,.reg-form{display:flex;flex-direction:column}
.reg-field{gap:.35rem}
.reg-label{color:#4a657a;font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.reg-input-wrap{align-items:center;background:#fff;border:1px solid #e2e8f0;border-radius:10px;display:flex;gap:.625rem;padding:0 1rem;transition:border-color .2s,box-shadow .2s}
.reg-input-wrap:focus-within{border-color:#0073b4;box-shadow:0 0 0 3px #1565c01a}
.reg-icon{color:#94a3b8;flex-shrink:0}
.reg-input{background:transparent;border:none;color:#1e293b;font-size:.9rem;outline:none;padding:.75rem 0;width:100%}
.reg-input::-moz-placeholder{color:#94a3b8}
.reg-input::placeholder{color:#94a3b8}
.reg-prefix{border-right:1px solid #e2e8f0;color:#334155;flex-shrink:0;font-size:.82rem;font-weight:600;padding-right:.75rem;white-space:nowrap}
.reg-input--prefix{padding-left:.5rem}
.reg-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-position:right 1rem center;background-repeat:no-repeat;cursor:pointer;padding-right:2.5rem}
.reg-checkbox{align-items:flex-start;cursor:pointer;display:flex;gap:.625rem}
.reg-check-input{display:none}
.reg-check-box{border:2px solid #cbd5e1;border-radius:4px;flex-shrink:0;height:18px;margin-top:1px;position:relative;transition:border-color .2s,background .2s;width:18px}
.reg-check-input:checked+.reg-check-box{background:#0073b4;border-color:#0073b4}
.reg-check-input:checked+.reg-check-box:after{border:2px solid #fff;border-left:none;border-top:none;content:"";height:9px;left:3px;position:absolute;top:0;transform:rotate(45deg);width:5px}
.reg-check-label{color:#4a657a;font-size:.72rem;line-height:1.5}
.reg-link{color:#0073b4;text-decoration:underline}
.reg-captcha{background:#f9f9f9;border:1px solid #d3d3d3;border-radius:4px;justify-content:space-between;max-width:300px;padding:.7rem 1rem}
.captcha-inner,.reg-captcha{align-items:center;display:flex}
.captcha-inner{color:#333;cursor:pointer;font-size:.85rem;gap:.75rem}
.captcha-check{cursor:pointer;height:22px;width:22px}
.captcha-brand{align-items:center;display:flex;flex-direction:column}
.captcha-brand small{color:#555;font-size:.5rem}
.reg-btn{align-items:center;background:#0073b4;border:2px solid #0073b4;border-radius:10px;color:#fff;cursor:pointer;display:flex;font-size:.92rem;font-weight:700;gap:.5rem;justify-content:center;padding:.875rem 1.5rem;transition:all .2s}
.reg-btn:hover:not(:disabled){background:#003b5c;border-color:#003b5c;transform:translateY(-1px)}
.reg-btn:disabled{background:#cbd5e1;border-color:#cbd5e1;cursor:not-allowed}
.reg-btn--outline{background:transparent;border-color:#0073b4;color:#0073b4}
.reg-btn--outline:hover{background:#f0f6fc;transform:translateY(-1px)}
.spin{animation:spin-c8550db5 1s linear infinite}
.fade-enter-active,.fade-leave-active{transition:opacity .25s ease,transform .25s ease}
.fade-enter-from,.fade-leave-to{opacity:0;transform:translateY(8px)}
.reg-mascot-side{align-items:center;background:linear-gradient(145deg,#1a73e8,#003b5c);display:flex;flex:.75;justify-content:center;overflow:hidden;position:relative}
.reg-mascot-side:before{background:radial-gradient(circle at 30% 70%,hsla(0,0%,100%,.07) 0,transparent 60%);content:"";inset:0;position:absolute}
.mascot-wrap{max-width:300px;position:relative;width:85%;z-index:1}
.mascot-img{filter:drop-shadow(0 20px 30px rgba(0,0,0,.35));height:auto;-o-object-fit:contain;object-fit:contain;width:100%}
@media(max-width:900px){.reg-card{flex-direction:column-reverse}
.reg-mascot-side{min-height:200px;padding:2.5rem 0}
.mascot-wrap{width:50%}
.reg-form-side{padding:2.5rem 1.75rem}
.reg-captcha{max-width:100%}
@media(max-width:560px){.reg-section{padding:3rem 0}
.reg-form-side{padding:2rem 1.25rem}

}
}
</style>