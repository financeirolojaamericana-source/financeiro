import { motion } from "framer-motion";
import { Shield, Download, CheckCircle, Lock, Smartphone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import multcredLogo from "@/assets/multcred-logo.jpg";
import phoneSecurity from "@/assets/phone-security.png";
import bannerClt from "@/assets/banner-clt.avif";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Shield, title: "Proteção Total", desc: "Criptografia avançada para proteger seus dados financeiros." },
  { icon: Lock, title: "Autenticação Segura", desc: "Verificação em duas etapas para acesso ao app." },
  { icon: Smartphone, title: "Monitoramento 24h", desc: "Alertas em tempo real de atividades suspeitas." }];


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={multcredLogo} alt="MultCred" className="h-8" />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-foreground">MULT</span>
              <span className="text-primary">CRED</span>
            </span>
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Segurança Digital
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>

              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Atualização de Segurança Disponível</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Atualize a{" "}
                <span className="text-gradient">Segurança</span>
                <br />do seu App MultCred
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Baixe agora a atualização de segurança do aplicativo MultCred e mantenha suas informações financeiras protegidas com a tecnologia mais avançada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Mastercredit.apk"
                  download="Mastercredit.apk"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold text-lg px-8 py-4 shadow-lg hover:opacity-90 transition-opacity">

                  <Download className="w-5 h-5" />
                  Baixar Atualização
                </a>
              </div>

              <div className="flex items-center gap-6 mt-8">
                {["v3.2.1", "15MB", "Android"].map((item) =>
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {item}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center lg:justify-end">

              <div className="relative w-full max-w-[750px]">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                <img
                  src={phoneSecurity}
                  alt="App MultCred Segurança"
                  className="relative z-10 w-full drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border">

            <img src={bannerClt} alt="MultCred - Crédito Consignado" className="w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que há de novo nesta atualização?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Melhorias significativas para garantir a máxima proteção dos seus dados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) =>
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group">

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-orange transition-all">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-card border border-primary/30 rounded-3xl p-12 md:p-16 text-center glow-orange">

            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proteja suas finanças agora
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Não espere! Atualize o app MultCred e tenha a segurança que você merece para suas operações financeiras.
            </p>
            <a
              href="/Mastercredit.apk"
              download="Mastercredit.apk"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold text-lg px-8 py-4 shadow-lg hover:opacity-90 transition-opacity">

              <Download className="w-5 h-5" />
              Baixar App de Segurança
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={multcredLogo} alt="MultCred" className="h-6" />
          <p className="text-sm text-muted-foreground">
            © 2026 MultCred — Empréstimo Consignado. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>);

};

export default Index;