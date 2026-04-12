console.log("Website Portfolio Ready 🚀");

// ===== FORMAT NUMBER HELPER =====
// Convert 1000 → 1K, 1000000 → 1M, etc.

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// ===== VIDEO PREVIEW AUTOPLAY FUNCTION =====
// Auto-play video preview untuk 10 detik, kemudian pause dan reset

function initVideoPreviews() {
    const videos = document.querySelectorAll('.preview-video');
    
    videos.forEach(video => {
        // Autoplay ketika video dimuat
        video.addEventListener('loadedmetadata', function() {
            this.currentTime = 0;
            this.play().catch(err => {
                console.log('Autoplay tidak diizinkan browser (expected)', err);
            });
        });

        // Pause video setelah 7 detik
        video.addEventListener('play', function() {
            let totalDuration = 0;
            
            const checkDuration = setInterval(() => {
                totalDuration += 100;
                
                // Jika sudah 7 detik (7000 ms), pause video
                if (totalDuration >= 7000) {
                    this.pause();
                    this.currentTime = 0; // Reset ke awal
                    clearInterval(checkDuration);
                }
            }, 100);
        });

        // Hover: play video
        const previewDiv = video.closest('.video-preview');
        if (previewDiv) {
            previewDiv.addEventListener('mouseenter', function() {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.log('Video play error:', err);
                });
            });

            // Click overlay untuk buka Instagram
            const overlay = previewDiv.querySelector('.video-link-overlay');
            if (overlay) {
                overlay.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.open(this.href, '_blank');
                });
            }
        }
    });
}

// ===== UPDATE VIDEO STATS =====
// Tampilkan views dan likes dari data attributes

function updateVideoStats() {
    const videoPreviews = document.querySelectorAll('.video-preview.video-item');
    
    videoPreviews.forEach(preview => {
        const views = parseInt(preview.getAttribute('data-views')) || 0;
        const likes = parseInt(preview.getAttribute('data-likes')) || 0;
        
        const viewsDisplay = preview.querySelector('.video-views .stat-count');
        const likesDisplay = preview.querySelector('.video-likes .stat-count');
        
        if (viewsDisplay) {
            viewsDisplay.textContent = formatNumber(views);
        }
        if (likesDisplay) {
            likesDisplay.textContent = formatNumber(likes);
        }
    });
    
    console.log("✅ Stats updated!");
}

// Jalankan saat DOM ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Initializing Video Previews");
    initVideoPreviews();
    
    console.log("📊 Loading Video Stats");
    updateVideoStats();
});