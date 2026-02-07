document.addEventListener('DOMContentLoaded', function() {
    const optionRows = document.querySelectorAll('.option-row');
    
    // Her seçeneğe tıklama olayı ekle
    optionRows.forEach(row => {
        row.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            
            // Kısa bir animasyon için aktif sınıfını ekle
            optionRows.forEach(r => r.classList.remove('active'));
            this.classList.add('active');
            
            // 300ms sonra linke git (animasyonu görmek için)
            setTimeout(() => {
                window.location.href = link;
            }, 300);
        });
        
        // Klavye erişilebilirliği için
        row.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
        
        // Tab tuşu ile odaklanma
        row.setAttribute('tabindex', '0');
    });
});
