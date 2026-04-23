<template>
    <div class="impressum-container">
        <header>
            <h1>Impressum</h1>
        </header>
        
        <main>
            <section class="legal-info">
                <h2>Angaben gemäß § 5 TMG</h2>
                <address>
                    <p><strong>SEW CORE 11</strong></p>
                    <p>Musterstraße 1</p>
                    <p>1010 Wien</p>
                    <p>Österreich</p>
                </address>
            </section>
            
            <section class="contact">
                <h2>Kontakt</h2>
                <div class="contact-info">
                    <p><strong>Telefon:</strong> +43 123 456789</p>
                    <p><strong>E-Mail:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
                </div>
            </section>
            
            <section class="liability-content">
                <h2>Haftung für Inhalte</h2>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
            </section>
            
            <section class="liability-links">
                <h2>Haftung für Links</h2>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
            </section>
            
            <section class="copyright">
                <h2>Urheberrecht</h2>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht.</p>
            </section>
        </main>
    </div>
</template>

<style scoped>
.impressum-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    color: #e9ecef;
    line-height: 1.6;
}

h1 {
    font-size: 2.5rem;
    color: #c2e350;
    margin-bottom: 2rem;
    text-align: center;
}

h2 {
    font-size: 1.5rem;
    color: #a0aec0;
    border-bottom: 2px solid #4a5568;
    padding-bottom: 0.5rem;
    margin: 2rem 0 1rem 0;
}

section {
    margin-bottom: 2rem;
}

address {
    font-style: normal;
    background: #2d3748;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border-left: 4px solid #4299e1;
    margin-top: 1rem;
}

address p {
    margin: 0.5rem 0;
}

.contact-info {
    background: #2d3748;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border-left: 4px solid #4299e1;
    margin-top: 1rem;
}

.contact-info p {
    margin: 0.5rem 0;
}

a {
    color: #63b3ed;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

p {
    margin: 1rem 0;
}

strong {
    color: #e2e8f0;
}
</style>