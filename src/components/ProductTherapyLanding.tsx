import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Youtube, Heart, ArrowRight, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import meetupImage from "@/assets/meetup-networking.jpg";

const ProductTherapyLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Product Therapy
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A thriving community of Product Managers, Product Owners, Designers, and Developers 
                supporting each other through peer-to-peer coaching and meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Latest Videos
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="Product professionals collaborating" 
                className="rounded-2xl shadow-card-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Product Career Support System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're navigating career challenges or seeking workplace solutions, 
              our community provides the support and guidance you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Heart className="h-12 w-12 text-primary mb-3" />
                  <h3 className="text-xl font-semibold text-foreground">Peer-to-Peer Coaching</h3>
                </div>
                <p className="text-muted-foreground">
                  Connect with fellow product professionals who understand your challenges. 
                  Share experiences and learn from each other in a supportive environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Users className="h-12 w-12 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold text-foreground">Friendly Network</h3>
                </div>
                <p className="text-muted-foreground">
                  Build meaningful relationships with product professionals across Copenhagen's 
                  vibrant tech scene. Find mentors, collaborators, and friends.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Building2 className="h-12 w-12 text-accent-foreground mb-3" />
                  <h3 className="text-xl font-semibold text-foreground">Career Growth</h3>
                </div>
                <p className="text-muted-foreground">
                  Discuss important product topics, solve workplace problems, and accelerate 
                  your professional development through community wisdom.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Meetups Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={meetupImage} 
                alt="Product Therapy meetup networking" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div>
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Monthly Meetups in Copenhagen
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join us every month for in-person gatherings where product professionals 
                come together to discuss relevant topics, share insights, and build lasting connections.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Looking for sponsors?</strong> Companies can sponsor our meetups and 
                connect with Copenhagen's product community. Reach out to learn about opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg">
                  Attend Next Meetup
                </Button>
                <Button variant="outline" size="lg">
                  Sponsor an Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Youtube className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Product Therapy on YouTube
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Dive deeper into product management topics with our YouTube channel. 
            Watch discussions, interviews, and insights shared by our community members.
          </p>
          <Button variant="secondary" size="lg" className="group">
            Subscribe to Our Channel
            <Youtube className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Proudly Sponsored by</h3>
          <p className="text-lg mb-2">
            <strong>Mesh Group</strong>
          </p>
          <p className="text-muted-foreground">
            A product consultancy based in Copenhagen, empowering businesses 
            to build exceptional digital products.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductTherapyLanding;