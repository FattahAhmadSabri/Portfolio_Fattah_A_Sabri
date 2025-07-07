import React, { useState } from 'react';
import { 
  Box, Container, Typography, Chip, Button, 
  useTheme, useMediaQuery, Paper, Divider,
  IconButton
} from '@mui/material';
import { 
  GitHub, Launch, Star, 
  Visibility, ArrowRightAlt,
  ArrowBack, ArrowForward 
} from '@mui/icons-material';

const ProjectsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const projectsPerPage = isMobile ? 4 : 8;
  
  // Project categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'api', label: 'APIs' },
    { id: 'database', label: 'Database' },
  ];
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, inventory management, and analytics dashboard.",
      technologies: ["Node.js", "React", "MongoDB", "Stripe API", "Redis"],
      category: "web",
      github: "#",
      demo: "#",
      stars: 128,
      views: 2450
    },
    {
      id: 2,
      title: "Health & Fitness Mobile App",
      description: "Cross-platform fitness application with workout tracking, nutrition planning, and social sharing features.",
      technologies: ["React Native", "Firebase", "Redux", "GraphQL"],
      category: "mobile",
      github: "#",
      demo: "#",
      stars: 89,
      views: 1870
    },
    {
      id: 3,
      title: "Real-time Chat API",
      description: "Scalable messaging API with WebSocket support, message queuing, and end-to-end encryption.",
      technologies: ["Node.js", "WebSocket", "RabbitMQ", "JWT", "Docker"],
      category: "api",
      github: "#",
      demo: "#",
      stars: 156,
      views: 3210
    },
    {
      id: 4,
      title: "Inventory Management System",
      description: "Enterprise inventory solution with barcode scanning, predictive analytics, and multi-warehouse support.",
      technologies: ["Python", "Django", "PostgreSQL", "AWS", "Redis"],
      category: "database",
      github: "#",
      demo: "#",
      stars: 74,
      views: 1520
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "AI-powered content creation tool with natural language processing and plagiarism detection.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "MongoDB"],
      category: "web",
      github: "#",
      demo: "#",
      stars: 215,
      views: 4320
    },
    {
      id: 6,
      title: "Ride-Sharing Mobile App",
      description: "On-demand transportation platform with real-time tracking, fare estimation, and driver matching.",
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Socket.io"],
      category: "mobile",
      github: "#",
      demo: "#",
      stars: 143,
      views: 2890
    },
    {
      id: 7,
      title: "Payment Processing API",
      description: "Secure payment gateway with multiple payment method support, fraud detection, and reconciliation.",
      technologies: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis"],
      category: "api",
      github: "#",
      demo: "#",
      stars: 98,
      views: 2100
    },
    {
      id: 8,
      title: "Customer Analytics Dashboard",
      description: "Data visualization platform with real-time analytics, customer segmentation, and predictive modeling.",
      technologies: ["React", "D3.js", "Express.js", "MongoDB", "Redux"],
      category: "database",
      github: "#",
      demo: "#",
      stars: 132,
      views: 2750
    },
    {
      id: 9,
      title: "Blockchain Supply Chain",
      description: "Decentralized supply chain solution with smart contracts, product tracking, and transparency features.",
      technologies: ["Ethereum", "Solidity", "Node.js", "React", "Web3.js"],
      category: "web",
      github: "#",
      demo: "#",
      stars: 187,
      views: 3650
    },
    {
      id: 10,
      title: "Language Learning App",
      description: "Mobile application for language learning with speech recognition, adaptive learning, and gamification.",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite", "Node.js"],
      category: "mobile",
      github: "#",
      demo: "#",
      stars: 115,
      views: 2410
    },
    {
      id: 11,
      title: "IoT Device Management API",
      description: "Centralized API for managing IoT devices, collecting sensor data, and triggering automated actions.",
      technologies: ["Node.js", "MQTT", "MongoDB", "Redis", "Docker"],
      category: "api",
      github: "#",
      demo: "#",
      stars: 94,
      views: 1980
    },
    {
      id: 12,
      title: "Financial Data Warehouse",
      description: "High-performance data warehouse for financial analytics with ETL pipelines and OLAP capabilities.",
      technologies: ["Python", "PostgreSQL", "Apache Spark", "Kafka", "AWS Redshift"],
      category: "database",
      github: "#",
      demo: "#",
      stars: 78,
      views: 1630
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  // Paginate projects
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  );
  
  // Handle project selection for detailed view
  const handleProjectSelect = (project) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };
  
  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      color: '#fff',
      minHeight: '100vh',
      pt: 8,
      pb: 10,
      px: isMobile ? 2 : 4,
    }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
          position: 'relative',
          zIndex: 1
        }}>
          <Typography 
            variant={isMobile ? 'h3' : 'h1'} 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
          >
            Project Portfolio
          </Typography>
          <Typography variant="h6" sx={{ color: theme.palette.grey[300], maxWidth: 700, mx: 'auto' }}>
            Showcasing innovative solutions and technical expertise
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
        
        {/* Featured Project Section */}
        {activeProject ? (
          <Box sx={{ 
            mb: 8, 
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(20, 15, 60, 0.7)',
            backdropFilter: 'blur(10px)',
          }}>
            <Box sx={{
              height: 300,
              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.7) 150%)',
              }} />
              
              <Box sx={{
                fontSize: isMobile ? 80 : 120,
                fontWeight: 900,
                opacity: 0.1,
                position: 'absolute',
                zIndex: 0,
                transform: 'rotate(-30deg)'
              }}>
                {activeProject.title}
              </Box>
              
              <Typography variant={isMobile ? 'h4' : 'h2'} sx={{
                fontWeight: 800,
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                px: 2,
                textShadow: '0 4px 10px rgba(0,0,0,0.5)'
              }}>
                {activeProject.title}
              </Typography>
              
              <Button 
                onClick={() => setActiveProject(null)}
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  zIndex: 3
                }}
                variant="outlined"
              >
                Back to Projects
              </Button>
            </Box>
            
            <Box sx={{ p: isMobile ? 3 : 6 }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                gap: 6
              }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#00c9ff' }}>
                    Project Overview
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontSize: isMobile ? '1.1rem' : '1.2rem', 
                    mb: 4,
                    lineHeight: 1.8,
                    color: theme.palette.grey[300]
                  }}>
                    {activeProject.description}
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#92fe9d' }}>
                      Key Features
                    </Typography>
                    <Box sx={{ 
                      background: 'rgba(0,0,0,0.2)', 
                      borderRadius: 2,
                      p: 3 
                    }}>
                      <ul style={{ 
                        paddingLeft: 20, 
                        margin: 0,
                        color: theme.palette.grey[300],
                        fontSize: isMobile ? '1rem' : '1.1rem'
                      }}>
                        <li>Scalable architecture handling 10K+ concurrent users</li>
                        <li>Real-time data synchronization across devices</li>
                        <li>Advanced security with JWT authentication and RBAC</li>
                        <li>Comprehensive analytics dashboard with customizable reports</li>
                        <li>Automated testing with 95% code coverage</li>
                      </ul>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button 
                      variant="contained" 
                      startIcon={<Launch />}
                      sx={{
                        background: 'linear-gradient(45deg, #00c9ff, #0077ff)',
                        color: 'white',
                        fontWeight: 700,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2
                      }}
                    >
                      Live Demo
                    </Button>
                    
                    <Button 
                      variant="outlined" 
                      startIcon={<GitHub />}
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255,255,255,0.3)',
                        fontWeight: 700,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2
                      }}
                    >
                      Source Code
                    </Button>
                  </Box>
                </Box>
                
                <Box sx={{ 
                  flex: 1,
                  maxWidth: isMobile ? '100%' : '40%'
                }}>
                  <Box sx={{ 
                    background: 'rgba(0,0,0,0.3)', 
                    borderRadius: 4,
                    p: 4,
                    height: '100%'
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#00c9ff' }}>
                      Technologies Used
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
                      {activeProject.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          sx={{
                            background: 'rgba(0, 201, 255, 0.15)',
                            color: '#00c9ff',
                            fontWeight: 600,
                            fontSize: isMobile ? '0.9rem' : '1rem',
                            px: 1.5,
                            py: 1
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#92fe9d' }}>
                        Project Stats
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap',
                        gap: 2
                      }}>
                        <Box sx={{ 
                          flex: 1,
                          minWidth: 120,
                          background: 'rgba(255,255,255,0.05)', 
                          borderRadius: 2,
                          p: 2,
                          textAlign: 'center'
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Star sx={{ color: '#ffd700', mr: 1 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                              {activeProject.stars}
                            </Typography>
                          </Box>
                          <Typography variant="body2">GitHub Stars</Typography>
                        </Box>
                        <Box sx={{ 
                          flex: 1,
                          minWidth: 120,
                          background: 'rgba(255,255,255,0.05)', 
                          borderRadius: 2,
                          p: 2,
                          textAlign: 'center'
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Visibility sx={{ color: '#00c9ff', mr: 1 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                              {activeProject.views}
                            </Typography>
                          </Box>
                          <Typography variant="body2">Project Views</Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#92fe9d' }}>
                        Development Timeline
                      </Typography>
                      <Box sx={{ 
                        background: 'rgba(255,255,255,0.05)', 
                        borderRadius: 2,
                        p: 2
                      }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">Planning</Typography>
                          <Typography variant="body2">2 weeks</Typography>
                        </Box>
                        <Box sx={{ 
                          height: 8, 
                          width: '100%', 
                          background: 'rgba(255,255,255,0.1)', 
                          borderRadius: 4,
                          mb: 2,
                          overflow: 'hidden'
                        }}>
                          <Box sx={{ 
                            height: '100%', 
                            width: '20%', 
                            background: 'linear-gradient(45deg, #00c9ff, #0077ff)',
                            borderRadius: 4
                          }} />
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">Development</Typography>
                          <Typography variant="body2">3 months</Typography>
                        </Box>
                        <Box sx={{ 
                          height: 8, 
                          width: '100%', 
                          background: 'rgba(255,255,255,0.1)', 
                          borderRadius: 4,
                          mb: 2,
                          overflow: 'hidden'
                        }}>
                          <Box sx={{ 
                            height: '100%', 
                            width: '60%', 
                            background: 'linear-gradient(45deg, #00c9ff, #0077ff)',
                            borderRadius: 4
                          }} />
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">Testing & Deployment</Typography>
                          <Typography variant="body2">3 weeks</Typography>
                        </Box>
                        <Box sx={{ 
                          height: 8, 
                          width: '100%', 
                          background: 'rgba(255,255,255,0.1)', 
                          borderRadius: 4,
                          overflow: 'hidden'
                        }}>
                          <Box sx={{ 
                            height: '100%', 
                            width: '20%', 
                            background: 'linear-gradient(45deg, #00c9ff, #0077ff)',
                            borderRadius: 4
                          }} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <>
            {/* Filter Tabs */}
            <Box sx={{ 
              mb: 6,
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1
            }}>
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "contained" : "outlined"}
                  onClick={() => {
                    setFilter(category.id);
                    setCurrentPage(0);
                  }}
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    textTransform: 'none',
                    fontWeight: 700,
                    ...(filter === category.id ? {
                      background: 'linear-gradient(45deg, #00c9ff, #0077ff)',
                      color: 'white',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                    } : {
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.3)',
                    }),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                    }
                  }}
                >
                  {category.label}
                </Button>
              ))}
            </Box>
            
            {/* Project Cards with Flexbox */}
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center'
            }}>
              {paginatedProjects.map(project => (
                <Paper 
                  key={project.id}
                  onClick={() => handleProjectSelect(project)}
                  sx={{
                    flex: `1 1 ${isMobile ? '100%' : 'calc(25% - 32px)'}`,
                    minWidth: 280,
                    maxWidth: 320,
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: 'rgba(30, 25, 80, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                      borderColor: 'rgba(0, 201, 255, 0.5)'
                    }
                  }}
                >
                  <Box sx={{
                    height: 160,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.7) 150%)',
                    }} />
                    
                    <Box sx={{
                      fontSize: 40,
                      fontWeight: 900,
                      opacity: 0.1,
                      position: 'absolute'
                    }}>
                      {project.title.split(' ')[0]}
                    </Box>
                    
                    <Typography variant="h6" sx={{
                      fontWeight: 700,
                      position: 'relative',
                      zIndex: 1,
                      textAlign: 'center',
                      px: 2
                    }}>
                      {project.title}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ p: 3 }}>
                    <Typography variant="body2" sx={{ 
                      color: theme.palette.grey[300],
                      mb: 3,
                      minHeight: 60
                    }}>
                      {project.description.substring(0, 100)}...
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            background: 'rgba(0, 201, 255, 0.15)',
                            color: '#00c9ff',
                            fontWeight: 600,
                            fontSize: '0.7rem'
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{
                            background: 'rgba(146, 254, 157, 0.15)',
                            color: '#92fe9d',
                            fontWeight: 600,
                            fontSize: '0.7rem'
                          }}
                        />
                      )}
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Star sx={{ fontSize: 18, color: '#ffd700', mr: 0.5 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {project.stars}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Visibility sx={{ fontSize: 18, color: '#00c9ff', mr: 0.5 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {project.views}
                        </Typography>
                      </Box>
                      
                      <Button 
                        size="small"
                        endIcon={<ArrowRightAlt />}
                        sx={{
                          color: '#92fe9d',
                          fontWeight: 700,
                          fontSize: '0.8rem'
                        }}
                      >
                        Details
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
            
            {/* Pagination */}
            {pageCount > 1 && (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mt: 6,
                gap: 1
              }}>
                <IconButton 
                  disabled={currentPage === 0}
                  onClick={() => handlePageChange(currentPage - 1)}
                  sx={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(0, 201, 255, 0.3)'
                    },
                    '&:disabled': {
                      opacity: 0.3
                    }
                  }}
                >
                  <ArrowBack />
                </IconButton>
                
                {[...Array(pageCount)].map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => handlePageChange(index)}
                    sx={{
                      minWidth: 40,
                      height: 40,
                      borderRadius: '50%',
                      fontWeight: 700,
                      ...(currentPage === index ? {
                        background: 'linear-gradient(45deg, #00c9ff, #0077ff)',
                        color: 'white'
                      } : {
                        color: 'white',
                        background: 'rgba(255,255,255,0.1)'
                      }),
                      '&:hover': {
                        background: 'rgba(0, 201, 255, 0.3)'
                      }
                    }}
                  >
                    {index + 1}
                  </Button>
                ))}
                
                <IconButton 
                  disabled={currentPage === pageCount - 1}
                  onClick={() => handlePageChange(currentPage + 1)}
                  sx={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(0, 201, 255, 0.3)'
                    },
                    '&:disabled': {
                      opacity: 0.3
                    }
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </Box>
            )}
            
            {/* Project Stats */}
            <Box sx={{ 
              mt: 10,
              background: 'rgba(20, 15, 60, 0.7)',
              borderRadius: 4,
              p: 4,
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center'
            }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, color: '#92fe9d' }}>
                Project Statistics
              </Typography>
              
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 4
              }}>
                <Box sx={{ flex: '1 1 160px', minWidth: 160 }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    12+
                  </Typography>
                  <Typography variant="h6" sx={{ color: theme.palette.grey[300] }}>
                    Projects
                  </Typography>
                </Box>
                
                <Box sx={{ flex: '1 1 160px', minWidth: 160 }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    8K+
                  </Typography>
                  <Typography variant="h6" sx={{ color: theme.palette.grey[300] }}>
                    GitHub Stars
                  </Typography>
                </Box>
                
                <Box sx={{ flex: '1 1 160px', minWidth: 160 }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    15+
                  </Typography>
                  <Typography variant="h6" sx={{ color: theme.palette.grey[300] }}>
                    Technologies
                  </Typography>
                </Box>
                
                <Box sx={{ flex: '1 1 160px', minWidth: 160 }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    4
                  </Typography>
                  <Typography variant="h6" sx={{ color: theme.palette.grey[300] }}>
                    Categories
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Container>    
    </Box>
  );
};

export default ProjectsPage;