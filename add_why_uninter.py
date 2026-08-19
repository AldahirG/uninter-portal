import json

def get_why_uninter(career_id, discipline):
    reasons = []
    
    # Base reason 1: Networking & Real-world practice
    if discipline == "Technology":
        reasons.append({
            "text": "Laboratorios de Alta Tecnología",
            "evidence": "Acceso 24/7 a equipos de última generación y software especializado para que desarrolles proyectos reales desde el primer semestre.",
            "icon": "Monitor"
        })
        reasons.append({
            "text": "Certificaciones de la Industria",
            "evidence": "Prepárate para obtener insignias y certificaciones de gigantes tecnológicos que avalan tus conocimientos a nivel internacional.",
            "icon": "Award"
        })
        reasons.append({
            "text": "Ecosistema de Innovación",
            "evidence": "Participa en hackathons y proyectos de incubación que te conectarán con líderes del sector tecnológico.",
            "icon": "Rocket"
        })
    elif discipline == "Business":
        reasons.append({
            "text": "Simuladores de Negocios",
            "evidence": "Toma decisiones estratégicas en entornos empresariales simulados que replican los desafíos del mercado actual.",
            "icon": "TrendingUp"
        })
        reasons.append({
            "text": "Red de Contactos Directiva",
            "evidence": "Aprende de profesores que son CEO's y directivos activos, creando networking de alto nivel desde las aulas.",
            "icon": "Users"
        })
        reasons.append({
            "text": "Visión Global",
            "evidence": "Desarrolla competencias internacionales con viajes académicos y análisis de casos de éxito multinacionales.",
            "icon": "Globe"
        })
    elif discipline == "Design & Engineering":
        reasons.append({
            "text": "Talleres Especializados",
            "evidence": "Transforma tus ideas en realidad utilizando talleres equipados con tecnología de grado industrial y herramientas de vanguardia.",
            "icon": "PenTool"
        })
        reasons.append({
            "text": "Portafolio Profesional",
            "evidence": "Gradúate con un portafolio robusto de proyectos reales desarrollados en colaboración con empresas aliadas.",
            "icon": "Briefcase"
        })
        reasons.append({
            "text": "Innovación Sostenible",
            "evidence": "Fórmate bajo un enfoque de diseño sustentable y resolución de problemas que el mundo actual demanda.",
            "icon": "Leaf"
        })
    else: # Humanities & Health & others
        reasons.append({
            "text": "Prácticas en Escenarios Reales",
            "evidence": "Aplica la teoría inmediatamente en centros de práctica, clínicas o instituciones aliadas de primer nivel.",
            "icon": "Users"
        })
        reasons.append({
            "text": "Impacto Social",
            "evidence": "Desarrolla proyectos de intervención que generan un cambio positivo y tangible en la comunidad.",
            "icon": "Heart"
        })
        reasons.append({
            "text": "Formación Integral",
            "evidence": "Combina el rigor científico con un profundo sentido ético y humano, destacando en cualquier entorno profesional.",
            "icon": "ShieldCheck"
        })
        
    return reasons

with open('app/assets/data/carreras.json', 'r', encoding='utf-8') as f:
    carreras = json.load(f)
    
for c_key, c in carreras.items():
    # Determine discipline
    cat = c.get('category', '').lower()
    cid = c.get('id', '')
    
    discipline = "Humanities"
    if 'ingenieria' in cid or 'sistemas' in cid or 'animacion' in cid:
        if 'industrial' in cid or 'mecatronica' in cid or 'arquitectura' in cid or 'diseno' in cid:
            discipline = "Design & Engineering"
        else:
            discipline = "Technology"
    elif 'administracion' in cid or 'negocios' in cid or 'mercadotecnia' in cid or 'finanzas' in cid or 'contaduria' in cid or 'comercio' in cid or 'relaciones' in cid or 'turismo' in cid:
        discipline = "Business"
    elif 'arquitectura' in cid or 'diseno' in cid or 'comunicacion' in cid:
        discipline = "Design & Engineering"
        
    c['whyUninter'] = get_why_uninter(cid, discipline)

with open('app/assets/data/carreras.json', 'w', encoding='utf-8') as f:
    json.dump(carreras, f, ensure_ascii=False, indent=2)

print("whyUninter added to all careers.")
