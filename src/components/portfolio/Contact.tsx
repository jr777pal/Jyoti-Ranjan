import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jyotiranjanpal777@gmail.com',
      color: 'text-neon-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9348495372, +91 8018119112',
      color: 'text-neon-purple'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Electronic City Phase-2 Bengaluru',
      color: 'text-neon-pink'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 border-cyber-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-cyber-surface/50 border-cyber-border focus:border-neon-blue"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-cyber-surface/50 border-cyber-border focus:border-neon-blue"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-cyber-surface/50 border-cyber-border focus:border-neon-blue min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-neon-blue hover:bg-neon-purple text-cyber-dark font-semibold py-3 glow-blue hover:glow-purple transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass p-6 border-cyber-border hover:border-neon-blue/50 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-cyber-surface/50 group-hover:bg-cyber-dark transition-colors duration-300">
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}

            <Card className="glass p-6 border-cyber-border text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Available for Work
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Currently open to new opportunities and exciting projects.
              </p>
              <div className="w-3 h-3 bg-neon-blue rounded-full mx-auto animate-pulse-slow" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};