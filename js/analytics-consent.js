/* SVEED website analytics: basic consent mode. No Google tag loads without opt-in. */
(function () {
  'use strict';
  const measurementId = 'G-4C8EEFE9L1';
  const storageKey = 'sveed-analytics-consent-v1';
  const language = document.documentElement.lang.slice(0, 2);
  const copy = {
    pt: {
      title: 'Privacidade do site',
      description: 'Com sua autorização, usamos Google Analytics 4 para medir visitas, páginas acessadas, origem do tráfego e localização aproximada. Sem anúncios personalizados. A escolha pode ser alterada a qualquer momento.',
      accept: 'Aceitar análise', reject: 'Recusar análise', settings: 'Preferências de análise',
      policy: 'Política de Privacidade', policyHref: '/privacy.html'
    },
    en: {
      title: 'Website privacy',
      description: 'With your permission, we use Google Analytics 4 to measure visits, pages viewed, traffic sources and approximate location. No personalized ads. You can change your choice at any time.',
      accept: 'Allow analytics', reject: 'Decline analytics', settings: 'Analytics preferences',
      policy: 'Privacy Policy', policyHref: '/privacy-en.html'
    },
    es: {
      title: 'Privacidad del sitio',
      description: 'Con su autorización, usamos Google Analytics 4 para medir visitas, páginas consultadas, fuentes de tráfico y ubicación aproximada. Sin anuncios personalizados. Puede cambiar su elección cuando quiera.',
      accept: 'Aceptar análisis', reject: 'Rechazar análisis', settings: 'Preferencias de análisis',
      policy: 'Política de Privacidad', policyHref: '/privacy-es.html'
    }
  }[language] || null;
  if (!copy || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
  let choice = null;
  try { choice = localStorage.getItem(storageKey); } catch (_) {}
  let started = false;
  function startAnalytics() {
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    let referrer = '';
    try { if (document.referrer) referrer = new URL(document.referrer).origin; } catch (_) {}
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 60 * 24 * 60 * 60,
      cookie_update: false,
      page_location: location.origin + location.pathname,
      page_referrer: referrer,
      page_title: document.title
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }
  function removeAnalyticsCookies() {
    const names = document.cookie.split(';').map(part => part.trim().split('=')[0])
      .filter(name => /^_ga(?:_|$)/.test(name));
    const host = location.hostname;
    const domains = [host, '.' + host];
    if (host.startsWith('www.')) domains.push(host.slice(4), '.' + host.slice(4));
    for (const name of names) {
      document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax; Secure';
      for (const domain of domains) {
        document.cookie = name + '=; Max-Age=0; Path=/; Domain=' + domain + '; SameSite=Lax; Secure';
      }
    }
  }
  if (choice === 'granted') startAnalytics();
  function mountControls() {
    const style = document.createElement('style');
    style.textContent = '.sveed-consent{position:fixed;z-index:2147483000;left:16px;right:16px;bottom:16px;max-width:650px;margin:auto;padding:18px 20px;background:#fff;color:#17314e;border:1px solid #b7c9d7;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.25);font:15px/1.45 system-ui,-apple-system,sans-serif}.sveed-consent[hidden]{display:none}.sveed-consent h2{font-size:18px;line-height:1.3;margin:0 0 8px;color:#0a2342}.sveed-consent p{margin:0 0 13px}.sveed-consent a{color:#075386;text-decoration:underline}.sveed-consent-actions{display:flex;flex-wrap:wrap;gap:10px;margin:12px 0 0}.sveed-consent-actions button{border:1px solid #0a5982;border-radius:7px;padding:10px 16px;min-height:44px;background:#fff;color:#0a4565;font:600 15px system-ui,-apple-system,sans-serif;cursor:pointer}.sveed-consent-actions button:first-child{background:#0a5982;color:#fff}.sveed-analytics-settings{display:block;background:transparent;border:0;color:inherit;text-decoration:underline;font:inherit;cursor:pointer;padding:10px;margin:12px auto;min-height:44px}.sveed-consent button:focus-visible,.sveed-analytics-settings:focus-visible{outline:3px solid #e87532;outline-offset:2px}@media(max-width:500px){.sveed-consent{left:8px;right:8px;bottom:8px;padding:15px}}';
    document.head.appendChild(style);
    const panel = document.createElement('section');
    panel.className = 'sveed-consent';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', copy.title);
    const heading = document.createElement('h2'); heading.textContent = copy.title;
    const description = document.createElement('p'); description.textContent = copy.description;
    const policy = document.createElement('a'); policy.href = copy.policyHref; policy.textContent = copy.policy;
    const actions = document.createElement('div'); actions.className = 'sveed-consent-actions';
    const accept = document.createElement('button'); accept.type = 'button'; accept.textContent = copy.accept;
    const reject = document.createElement('button'); reject.type = 'button'; reject.textContent = copy.reject;
    actions.append(accept, reject); panel.append(heading, description, policy, actions);
    document.body.appendChild(panel);
    panel.hidden = choice === 'granted' || choice === 'denied';
    const settings = document.createElement('button');
    settings.type = 'button'; settings.className = 'sveed-analytics-settings'; settings.textContent = copy.settings;
    (document.querySelector('footer') || document.body).appendChild(settings);
    settings.addEventListener('click', () => { panel.hidden = false; accept.focus(); });
    accept.addEventListener('click', () => {
      try { localStorage.setItem(storageKey, 'granted'); } catch (_) {}
      choice = 'granted'; panel.hidden = true; startAnalytics();
    });
    reject.addEventListener('click', () => {
      try { localStorage.setItem(storageKey, 'denied'); } catch (_) {}
      choice = 'denied'; panel.hidden = true;
      window['ga-disable-' + measurementId] = true;
      removeAnalyticsCookies();
      if (started) location.reload();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountControls, { once: true });
  else mountControls();
})();