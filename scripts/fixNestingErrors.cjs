const fs = require('fs');

// Fix BecaWizard.vue
let becaWizard = fs.readFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/BecaWizard.vue', 'utf8');
// It currently ends its form template with:
//               </Transition>
//             </div>
//           </div>
//         </div>
//       </div>
// We need to change that to just:
//               </Transition>
//             </div>
//           </div>
becaWizard = becaWizard.replace(`              </Transition>
            </div>
          </div>
        </div>
      </div>`, `              </Transition>
            </div>
          </div>`);
fs.writeFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/BecaWizard.vue', becaWizard);


// Fix CareerAdmissionCTA.vue
let cta = fs.readFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/CareerAdmissionCTA.vue', 'utf8');

// The end of the template is:
//           <BecaWizard :customCta="customCta" />
//
//           <!-- REDES SOCIALES AL FINAL DE LA CALCULADORA -->
//       <div class="admission-socials">
//         ...
//       </div>
//     </div>
//   </section>
// We need to add the missing closing divs.
cta = cta.replace(`          <BecaWizard :customCta="customCta" />

          <!-- REDES SOCIALES AL FINAL DE LA CALCULADORA -->`, `          <BecaWizard :customCta="customCta" />
        </div>

        <!-- REDES SOCIALES AL FINAL DE LA CALCULADORA -->`);

cta = cta.replace(`      <div class="admission-socials">
        <p class="socials-title">Únete a la Comunidad UNINTER</p>
        <div class="socials-icons">
          <a v-for="s in socials" :key="s.icon" :href="s.href" target="_blank" class="soc-link" :aria-label="s.label">
            <Icon :name="s.icon" size="22" />
          </a>
        </div>
      </div>
    </div>
  </section>`, `      <div class="admission-socials">
        <p class="socials-title">Únete a la Comunidad UNINTER</p>
        <div class="socials-icons">
          <a v-for="s in socials" :key="s.icon" :href="s.href" target="_blank" class="soc-link" :aria-label="s.label">
            <Icon :name="s.icon" size="22" />
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>`);

fs.writeFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/degree/shared/CareerAdmissionCTA.vue', cta);
console.log('Fixed nesting in both files');
