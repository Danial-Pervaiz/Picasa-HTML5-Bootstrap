// Style changer
$(document).ready(function(){
    if (!($("html").hasClass("mobile"))){

        $('.btn-changer').on('click', function(){
            $(this).parent().toggleClass('open');
        })

        $('.color-changer a').on('click', function(){
            var style = $(this).attr('data-style');
            $('#theme').attr('href', 'css/theme/' + style + '.css');

            // theme blue color changer code
            if($(this).attr('data-style') === 'theme-blue'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#3498db '
                     }).children('h4').css({
                        'color':'#3498db'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#3498db'
                     }).children('h4').css({
                        'color':'#3498db'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#3498db'
                     }).children('h4').css({
                        'color':'#3498db'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#3498db'
                     }).children('h4').css({
                        'color':'#3498db'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#3498db'
                  }).next('.floated').children('h3').css({
                    'color':'#3498db'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#3498db'
                    }).children('a').css({
                      'color':'#3498db'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#3498db'
                    }).next('h4').css({
                      'color':'#3498db'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });


                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#3498db',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme blue color changer code ends here


            // theme green color changer code
            if($(this).attr('data-style') === 'theme-green'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#2ECC71 '
                     }).children('h4').css({
                        'color':'#2ECC71'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#2ECC71'
                     }).children('h4').css({
                        'color':'#2ECC71'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#2ECC71'
                     }).children('h4').css({
                        'color':'#2ECC71'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#2ECC71'
                     }).children('h4').css({
                        'color':'#2ECC71'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#2ECC71'
                  }).next('.floated').children('h3').css({
                    'color':'#2ECC71'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#2ECC71'
                    }).children('a').css({
                      'color':'#2ECC71'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#2ECC71'
                    }).next('h4').css({
                      'color':'#2ECC71'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#2ECC71',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme green color changer code ends here

            // theme grey color changer code
            if($(this).attr('data-style') === 'theme-grey'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#5E6F80 '
                     }).children('h4').css({
                        'color':'#5E6F80'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#5E6F80'
                     }).children('h4').css({
                        'color':'#5E6F80'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#5E6F80'
                     }).children('h4').css({
                        'color':'#5E6F80'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#5E6F80'
                     }).children('h4').css({
                        'color':'#5E6F80'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#5E6F80'
                  }).next('.floated').children('h3').css({
                    'color':'#5E6F80'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#5E6F80'
                    }).children('a').css({
                      'color':'#5E6F80'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#5E6F80'
                    }).next('h4').css({
                      'color':'#5E6F80'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#5E6F80',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme grey color changer code ends here

            // theme occean blue color changer code
            if($(this).attr('data-style') === 'theme-occeanBlue'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#22BBBB '
                     }).children('h4').css({
                        'color':'#22BBBB'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#22BBBB'
                     }).children('h4').css({
                        'color':'#22BBBB'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#22BBBB'
                     }).children('h4').css({
                        'color':'#22BBBB'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#22BBBB'
                     }).children('h4').css({
                        'color':'#22BBBB'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#22BBBB'
                  }).next('.floated').children('h3').css({
                    'color':'#22BBBB'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#22BBBB'
                    }).children('a').css({
                      'color':'#22BBBB'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#22BBBB'
                    }).next('h4').css({
                      'color':'#22BBBB'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#22BBBB',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme occean blue color changer code ends here


            // theme orange color changer code
            if($(this).attr('data-style') === 'theme-orange'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E67E22 '
                     }).children('h4').css({
                        'color':'#E67E22'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E67E22'
                     }).children('h4').css({
                        'color':'#E67E22'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E67E22'
                     }).children('h4').css({
                        'color':'#E67E22'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E67E22'
                     }).children('h4').css({
                        'color':'#E67E22'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#E67E22'
                  }).next('.floated').children('h3').css({
                    'color':'#E67E22'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#E67E22'
                    }).children('a').css({
                      'color':'#E67E22'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#E67E22'
                    }).next('h4').css({
                      'color':'#E67E22'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#E67E22',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme orange color changer code ends here


        

            // theme red color changer code
            if($(this).attr('data-style') === 'theme-red'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E74C3C '
                     }).children('h4').css({
                        'color':'#E74C3C'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E74C3C'
                     }).children('h4').css({
                        'color':'#E74C3C'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E74C3C'
                     }).children('h4').css({
                        'color':'#E74C3C'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#E74C3C'
                     }).children('h4').css({
                        'color':'#E74C3C'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#E74C3C'
                  }).next('.floated').children('h3').css({
                    'color':'#E74C3C'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#E74C3C'
                    }).children('a').css({
                      'color':'#E74C3C'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#E74C3C'
                    }).next('h4').css({
                      'color':'#E74C3C'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#E74C3C',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme red color changer code ends here

            // theme skypeBlue color changer code
            if($(this).attr('data-style') === 'theme-skyBlue'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#1ED2FF '
                     }).children('h4').css({
                        'color':'#1ED2FF'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#1ED2FF'
                     }).children('h4').css({
                        'color':'#1ED2FF'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#1ED2FF'
                     }).children('h4').css({
                        'color':'#1ED2FF'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#1ED2FF'
                     }).children('h4').css({
                        'color':'#1ED2FF'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#1ED2FF'
                  }).next('.floated').children('h3').css({
                    'color':'#1ED2FF'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#1ED2FF'
                    }).children('a').css({
                      'color':'#1ED2FF'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#1ED2FF'
                    }).next('h4').css({
                      'color':'#1ED2FF'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#1ED2FF',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme skyBlue color changer code ends here

            // theme yellow color changer code
            if($(this).attr('data-style') === 'theme-yellow'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#FFC400 '
                     }).children('h4').css({
                        'color':'#FFC400'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#FFC400'
                     }).children('h4').css({
                        'color':'#FFC400'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#FFC400'
                     }).children('h4').css({
                        'color':'#FFC400'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#FFC400'
                     }).children('h4').css({
                        'color':'#FFC400'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#FFC400'
                  }).next('.floated').children('h3').css({
                    'color':'#FFC400'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#FFC400'
                    }).children('a').css({
                      'color':'#FFC400'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#FFC400'
                    }).next('h4').css({
                      'color':'#FFC400'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#FFC400',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme yellow color changer code ends here
            // theme purple color changer code
            if($(this).attr('data-style') === 'theme-purple'){
                // // this is automatic click slider which clicks one of the option in the services section after some time. 
                // // but this is just for demo purpose you can delete it . it won't hurt the layout

                  function demo3(){
                    $('#majic').trigger("click");
                  }

                  setTimeout(demo3,1000);
                  

                  // this code will work when you click one of the options of the services section . it will active the current item

                  $('#majic').on('click',function(){
                     $(this).children('a').css({
                        'color':'#8e44ad '
                     }).children('h4').css({
                        'color':'#8e44ad'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });
                  $('#pie').on('click',function(){
                     $(this).children('a').css({
                        'color':'#8e44ad'
                     }).children('h4').css({
                        'color':'#8e44ad'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                  $('#umberella').on('click',function(){
                     $(this).children('a').css({
                        'color':'#8e44ad'
                     }).children('h4').css({
                        'color':'#8e44ad'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#case').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                   $('#case').on('click',function(){
                     $(this).children('a').css({
                        'color':'#8e44ad'
                     }).children('h4').css({
                        'color':'#8e44ad'
                     });
                     $('#pie').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#majic').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                     $('#umberella').children('a').css({
                        'color':'#404040 '
                     }).children('h4').css({
                        'color':'#404040'
                     });
                  });

                $('.itemSubServices').on('mouseover',function(){
                  $(this).children('i').css({
                    'color':'#8e44ad'
                  }).next('.floated').children('h3').css({
                    'color':'#8e44ad'
                  })
                });
                $('.itemSubServices').on('mouseout',function(){
                  $(this).children('i').css({
                    'color':'#404040'
                  }).next('.floated').children('h3').css({
                    'color':'#404040'
                  })
                });

                  // for social icons hover effect

                  $('.itemTeam ul li').on('mouseover',function(){
                    $(this).css({
                      'border-color':'#fff'
                    }).children('a').css({
                      'color':'#fff'
                    });
                  })
                   $('.itemTeam ul li').on('mouseout',function(){
                    $(this).css({
                      'border-color':'#8e44ad'
                    }).children('a').css({
                      'color':'#8e44ad'
                    });
                  });

                    // team section hover effect

                  $('.itemTeam').on('mouseover',function(){
                    $(this).css({
                      'background-color':'#181818'
                    }).find('h3').css({
                      'color':'#8e44ad'
                    }).next('h4').css({
                      'color':'#8e44ad'
                    });
                  });

                   $('.itemTeam').on('mouseout',function(){
                    $(this).css({
                      'background-color':'#fff'
                    }).find('h3').css({
                      'color':'#404040'
                    }).next('h4').css({
                      'color':'#707070'
                    });
                  });

                   
                    // fun facts hover effect u can customize it

                   $('.itemFunFacts').on('mouseover',function(){
                      $(this).css({
                        'background-color':'#8e44ad',
                        'border':'none',
                        'border-radius':'0px'
                      }).find('h2').css({
                        'color':'#181818'
                      }).next('h4').css({
                        'color':'#181818'
                      })
                   });

                    $('.itemFunFacts').on('mouseout',function(){
                      $(this).css({
                        'background-color':'transparent',
                        'border-left':'1px solid #fff',
                        'border-right':'1px solid #fff',
                        'border-radius':'40px'
                      }).find('h2').css({
                        'color':'#fff'
                      }).next('h4').css({
                        'color':'#fff'
                      })
                   });
            } // theme purple color changer code ends here
            return false;
        })


        $('a.btn-ch-navbar').on('click', function(){
            var newNav = $(this).attr('data-navbar');
            var nav = $('.main-nav');
            if($(this).hasClass('disabled') || nav.hasClass(newNav))
                return false

            $('a.btn-ch-navbar').removeClass('disabled')
            
            $(this).addClass('disabled')

            if(nav.hasClass('white')) {
                nav.removeClass('white')
                nav.addClass('dark')
            }
            else {
                nav.removeClass('dark')
                nav.addClass('white')
            }

            return false;
        })


    }
});

