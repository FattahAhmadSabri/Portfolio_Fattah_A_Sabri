import React from 'react';
import {
  Box, Typography, Container, Paper, Chip,
  Divider, useTheme, useMediaQuery, Avatar, Button
} from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineDot,
  TimelineConnector, TimelineContent, TimelineOppositeContent
} from '@mui/lab';
import {
  Code, Storage, Cloud, Settings,
  Terminal, DeveloperMode, Build, DataObject
} from '@mui/icons-material';

// Interfaces for type definitions
interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Skills {
  [category: string]: string[];
}

interface TechIcons {
  [key: string]: React.ReactNode;
}

const ExperiencePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const experiences: Experience[] = [
    {
      period: "2021 - Present",
      company: "Wattmonk Technologies",
      role: "Associate Backend Developer",
      description: "Leading backend development for enterprise SaaS applications. Designed and implemented microservices architecture handling 50K+ requests per minute.",
      achievements: [
        "Reduced API response time by 65% through query optimization",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
        "Mentored 5 junior developers in best practices"
      ],
      technologies: ["Node.js", "Python", "Kubernetes", "RabbitMQ", "MongoDB", "Redis"]
    },
    {
      period: "2019 - 2021",
      company: "DataStream Inc.",
      role: "Backend Developer",
      description: "Developed and maintained RESTful APIs for data processing platform. Implemented real-time analytics features.",
      achievements: [
        "Designed scalable database architecture handling 10TB+ data",
        "Implemented authentication system serving 1M+ users",
        "Optimized ETL processes reducing execution time by 45%"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker", "AWS"]
    },
    {
      period: "2017 - 2019",
      company: "WebCore Systems",
      role: "Junior Backend Developer",
      description: "Built backend services for e-commerce platform. Focused on payment processing and order management systems.",
      achievements: [
        "Developed fraud detection system reducing fraudulent transactions by 30%",
        "Created automated testing suite increasing test coverage to 85%",
        "Implemented caching strategy improving page load times by 40%"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Redis", "JavaScript"]
    }
  ];

  const skills: Skills = {
    languages: ["JavaScript/Node.js", "Python", "Java", "Go", "PHP"],
    frameworks: ["Express.js", "Django", "Spring Boot", "Flask", "Laravel"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    devops: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
    tools: ["Git", "RabbitMQ", "Kafka", "GraphQL", "REST APIs"]
  };

  const techIcons: TechIcons = {
    "JavaScript/Node.js": <Terminal fontSize="large" />,
    "Node.js": <Terminal fontSize="large" />,
    "Python": <Code fontSize="large" />,
    "Java": <DataObject fontSize="large" />,
    "Go": <DeveloperMode fontSize="large" />,
    "PHP": <Settings fontSize="large" />,
    "MongoDB": <Storage fontSize="large" />,
    "PostgreSQL": <Storage fontSize="large" />,
    "AWS": <Cloud fontSize="large" />,
    "Docker": <Build fontSize="large" />,
    "Kubernetes": <Build fontSize="large" />
  };

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: '#fff',
      minHeight: '100vh',
      py: 8,
      px: isMobile ? 2 : 4,
    }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            sx={{
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(45deg, #ff8a00, #e52e71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
          >
            Backend Expertise
          </Typography>
          <Typography variant="h6" sx={{ color: theme.palette.grey[300], maxWidth: 700, mx: 'auto' }}>
            Crafting robust, scalable backend systems with cutting-edge technologies
          </Typography>
          <Divider sx={{
            my: 4,
            width: '100px',
            height: '4px',
            background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
            mx: 'auto',
            borderRadius: 2
          }} />
        </Box>

        {/* Timeline */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, color: '#fff' }}>
            Professional Journey
          </Typography>

          <Timeline position={isMobile ? "right" : "alternate"} sx={{ p: 0 }}>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0', flex: isMobile ? 0.2 : 0.4 }}
                  align={isMobile ? "left" : "right"}
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.grey[300],
                      fontWeight: 600,
                      background: 'rgba(255,255,255,0.1)',
                      p: 1,
                      borderRadius: 2,
                      display: 'inline-block'
                    }}
                  >
                    {exp.period}
                  </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: '#00c9ff',
                      boxShadow: '0 0 10px rgba(0,201,255,0.5)',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: 'transparent',
                        color: '#fff',
                        width: 16,
                        height: 16,
                        fontSize: '0.8rem'
                      }}
                    >
                      {index + 1}
                    </Avatar>
                  </TimelineDot>
                  {index < experiences.length - 1 && (
                    <TimelineConnector sx={{ bgcolor: '#00c9ff', height: '40px' }} />
                  )}
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#00c9ff' }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#fff', mb: 1.5 }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.grey[300], mb: 2 }}>
                      {exp.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#fff' }}>
                        Key Achievements:
                      </Typography>
                      <ul style={{ paddingLeft: 20, color: theme.palette.grey[300] }}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {exp.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          sx={{
                            bgcolor: 'rgba(0,201,255,0.15)',
                            color: '#fff',
                            fontWeight: 600,
                            borderRadius: 1
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, color: '#fff' }}>
            Technical Expertise
          </Typography>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center'
          }}>
            {Object.entries(skills).map(([category, items], index) => (
              <Box
                key={index}
                sx={{
                  flex: `1 1 ${isMobile ? '100%' : isTablet ? 'calc(50% - 32px)' : 'calc(33% - 32px)'}`,
                  minWidth: 300,
                  maxWidth: 400
                }}
              >
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                      borderColor: 'rgba(0,201,255,0.5)'
                    }
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      color: '#92fe9d',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {items.map((skill, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 1.5,
                          borderRadius: 2,
                          background: 'rgba(255,255,255,0.03)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(146, 254, 157, 0.1)',
                            transform: 'translateX(5px)'
                          }
                        }}
                      >
                        <Box sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(0,201,255,0.15)'
                        }}>
                          {techIcons[skill] || <Code fontSize="large" />}
                        </Box>
                        <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                          {skill}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#fff' }}>
            Ready to build something amazing?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
              color: '#000',
              fontWeight: 700,
              borderRadius: 50,
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
              }
            }}
          >
            Let's Collaborate
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperiencePage;
