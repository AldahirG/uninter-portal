<script setup lang="ts">
const blogs = [
  { slug: "escat",  label: "ESCAT",  title: "Escuela de Ciencias Administrativas y Tecnología",   img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "endecs", label: "ENDECS", title: "Escuela de Negocios, Derecho y Ciencias Sociales",    img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "ehli",   label: "EHLI",   title: "Escuela de Humanidades, Lenguas e Investigación",     img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "egr",    label: "EGRESADOS", title: "Comunidad y Red de Egresados UNINTER",            img: "/images/hero/licenciaturasPresenciales.jpg" },
];

const socials = [
  { icon: "mdi:facebook",  href: "https://www.facebook.com/uninteredu",            label: "Facebook"  },
  { icon: "mdi:instagram", href: "https://www.instagram.com/uninter_cuerna",        label: "Instagram" },
  { icon: "mdi:youtube",   href: "https://www.youtube.com/user/UniversidadUninter", label: "YouTube"   },
  { icon: "mdi:linkedin",  href: "https://www.linkedin.com/school/universidad-uninter/",  label: "LinkedIn"  },
];
</script>

<template>
  <section class="career-est">
    <div class="uninter-container">
      <div class="career-est__head">
        <p class="career-eyebrow">Conoce la Vida Uninter</p>
        <h2 class="career-est__title">A través de nuestros Blogs<br /><em>y Redes Sociales</em></h2>
      </div>
      
      <div class="career-est__grid">
        <a v-for="b in blogs" :key="b.slug" href="https://blog.uninter.edu.mx/" target="_blank" class="career-blog">
          <div class="career-blog__img-wrap">
            <img :src="b.img" :alt="b.title" class="career-blog__img" loading="lazy" />
            <div class="career-blog__overlay"></div>
            <span class="career-blog__badge">{{ b.label }}</span>
          </div>
          <div class="career-blog__body">
            <span class="career-blog__label">{{ b.label }}</span>
            <p class="career-blog__title">{{ b.title }}</p>
            <span class="career-blog__cta">Leer Blog →</span>
          </div>
        </a>
      </div>

      <div class="career-est__socials">
        <a v-for="s in socials" :key="s.icon" :href="s.href" target="_blank" class="career-soc" :aria-label="s.label">
          <Icon :name="s.icon" size="22" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-est {
  --p: #1565c0;
  --p-light: #e0f2fe;
  --pbg: #0f3c61;
  background: #ffffff;
  padding: 5.5rem 0;
  border-top: 1px solid #e2e8f0;
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.career-est__head {
  text-align: center;
  margin-bottom: 3.5rem;
}

.career-eyebrow {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--p);
  margin: 0 0 0.5rem;
}

.career-est__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.2;
}

.career-est__title em {
  font-style: italic;
  color: #d84315;
}

/* Grid of Blogs */
.career-est__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.career-blog {
  border-radius: 16px;
  overflow: hidden;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s,
              border-color 0.3s;
}

.career-blog:hover {
  transform: translateY(-6px);
  border-color: rgba(21, 101, 192, 0.3);
  box-shadow: 0 15px 30px rgba(15, 60, 97, 0.08);
}

.career-blog__img-wrap {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  border-bottom: 1px solid #e2e8f0;
}

.career-blog__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.career-blog:hover .career-blog__img {
  transform: scale(1.08);
}

.career-blog__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(15, 60, 97, 0.4));
}

.career-blog__badge {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  background: var(--p);
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.career-blog__body {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
}

.career-blog__label {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
}

.career-blog__title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.45;
  margin: 0;
  flex: 1;
  transition: color 0.2s;
}

.career-blog:hover .career-blog__title {
  color: var(--p);
}

.career-blog__cta {
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--p);
  transition: color 0.2s;
  margin-top: 0.5rem;
}

.career-blog:hover .career-blog__cta {
  color: #d84315;
}

/* Social Media Circular Buttons */
.career-est__socials {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
}

.career-soc {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.3s,
              color 0.3s,
              border-color 0.3s,
              transform 0.2s;
}

.career-soc:hover {
  background: var(--p);
  border-color: var(--p);
  color: #ffffff;
  transform: scale(1.1);
}

@media (max-width: 968px) {
  .career-est__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .career-est__grid {
    grid-template-columns: 1fr;
  }
  .career-blog__img-wrap {
    aspect-ratio: 16/9;
  }
}
</style>
