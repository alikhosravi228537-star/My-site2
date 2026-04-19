fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('update-time').innerHTML = `🕒 آخرین بروزرسانی: ${data.last_update}`;
        
        let v2rayHtml = '';
        data.v2ray.forEach(cfg => {
            v2rayHtml += `
                <div class="card" onclick="window.location.href='${cfg.link}'">
                    <div class="card-title">${cfg.name}</div>
                    <div class="card-desc">${cfg.desc}</div>
                    <div class="card-link-hint">📥 دانلود</div>
                </div>
            `;
        });
        document.getElementById('v2ray-list').innerHTML = v2rayHtml;
        
        let vpnHtml = '';
        data.vpn.forEach(cfg => {
            vpnHtml += `
                <div class="card" onclick="window.location.href='${cfg.link}'">
                    <div class="card-title">${cfg.name}</div>
                    <div class="card-desc">${cfg.desc}</div>
                    <div class="card-link-hint">📥 دانلود</div>
                </div>
            `;
        });
        document.getElementById('vpn-list').innerHTML = vpnHtml;
        
        let apkHtml = '';
        data.apps.forEach(app => {
            apkHtml += `
                <div class="card" onclick="window.location.href='${app.link}'">
                    <div class="card-title">${app.name}</div>
                    <div class="card-desc">${app.desc}</div>
                    <div class="card-link-hint">📥 دانلود</div>
                </div>
            `;
        });
        document.getElementById('apk-list').innerHTML = apkHtml;
        
        let proxyHtml = '';
        data.proxies.forEach(proxy => {
            proxyHtml += `
                <div class="card" onclick="navigator.clipboard.writeText('${proxy.address}'); alert('✅ کپی شد!')">
                    <div class="card-title">${proxy.name}</div>
                    <div class="card-desc">${proxy.address}</div>
                    <div class="card-desc">${proxy.desc}</div>
                    <div class="card-link-hint">📋 کپی</div>
                </div>
            `;
        });
        document.getElementById('proxy-list').innerHTML = proxyHtml;
    });