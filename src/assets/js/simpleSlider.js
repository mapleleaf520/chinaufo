// using more.js
// Element.Measure	: Line 84 
// author: qianyuan
// date: 2011/11 


// TODO: stop using more.js
  


/**
 *	Horizontal Slider
 */ 
var HSlider = new Class({
    
    Implements: [Options, Events],
    
    options: {
		duration: 1500,		// 动画时间 
		transition: Fx.Transitions.Quart.easeOut,	// 动画效果   
        
		startIndex: 0,		// 起始索引
		circle: true,		// 是否循环
        autoplay: true,		// 是否自动播放
        interval: 10000, 	// 自动播放间隔 
        
		indexBtns: '',		// 索引 css selector
        preBtn: '', 		// 后退按钮 css selector
        nextBtn: '',		// 前进按钮 css selector  
		container: '', 		// 指定外层容器（父元素） 
        
        onChange: function(i) {},	// 开始变换时
		onShow: function(i) {}     // 变换结束时
		
		
    },
    
    /**
     *  初始化方法
     */	     
    initialize: function(slides, options) {
        
        // 处理参数
		this.slides = $$(slides); 
		if (!this.slides.length) { return false; }
		
		this.setOptions(options);
		
		if (this.options.container) {
			this.container = getElement(this.options.container);
		} else {
			this.container = this.slides[0].getParent();
		}   
		this.slideSize = mesureSize(this.slides[0]);
        
        // 初始化slides并显示起始项 
        this.initSlides();  
        
        // 自动播放
        if (this.options.autoplay) {
            this.startAutoplay();
        }
        
        // 绑定事件
        this.attach();
    },
    
    /**
     *	初始化slides
     */	     
    initSlides: function() {
    	this.sildesWrapper = new Element('div', {
			styles: {
                width: ( this.slideSize.x ) * ( this.slides.length ),
                height: this.slideSize.y,
                overflow: 'hidden',
                zoom: '1'
            },
            tween: {
                duration: this.options.duration,
                transition: this.options.transition
            }
        });
        
        this.slides.each(function(slide) {
        
        	// need Element.Measure  
        	if (this.slides[0].getComputedSize) {
				var width = this.slides[0].getComputedSize().width;
			} 
        	slide.setStyles({
				'float': 'left',
				'width': width
			}).inject(this.sildesWrapper);
        }, this);  
        
        this.container.setStyle('overflow', 'hidden');
        this.sildesWrapper.inject(this.container); 
        
        // 设置初始位置
        this.curIndex = this.options.startIndex;
        this.sildesWrapper.setStyle('margin-left', - (this.slideSize.x * this.curIndex));
        this.fireEvent('change', [this.curIndex]);
        this.fireEvent('show', [this.curIndex]);
        
    },
    
    /**
     *  显示第i项
     */	     
    showSlide: function(iToShow) {     
	    this.sildesWrapper.get('tween').start('margin-left', - (this.slideSize.x * iToShow)).chain(function() {
        	this.fireEvent('show', [iToShow]);
        }.bind(this)); 
   		if (this.indexBtns) {
	        this.indexBtns[iToShow].addClass('active');
	    }  
    },
    
    /**
     *  隐藏第i项
     */	  
    hideSlide: function(iToHide) { 
		// do hide
		
		if (this.indexBtns) {
	        this.indexBtns[iToHide].removeClass('active');
		}	
	},
	
	/**
	 *	切换slide
	 */	 	
    changeToSlide: function(iToChange) {
        this.hideSlide(this.curIndex);
        this.showSlide(iToChange);
        this.fireEvent('change', [iToChange]);
        this.curIndex = iToChange;    
    },
    
    /**
     *  前进
     */	     
    cycleForward: function() {
        if (this.curIndex < this.slides.length - 1) {
            this.changeToSlide(this.curIndex + 1);
        } else if (this.options.circle) {
            this.changeToSlide(0);
        }
    },
    
    /**
     *  后退
     */	     
    cycleBack: function() {
        if (this.curIndex > 0) {
            this.changeToSlide(this.curIndex - 1);
        } else if (this.options.circle) {
            this.changeToSlide(this.slides.length - 1);
        }    
    },   
    
    /**
     *  开始自动播放
     */	     
    startAutoplay: function() {
        this.autoplay = this.cycleForward.periodical(this.options.interval, this);    
    },
    
    /**
     *  停止自动播放
     */	     
    stopAutoplay: function() {
        clearInterval(this.autoplay);
    },
    
	/**
	 *  绑定事件
	 */	 	
	attach: function() {
		if (this.options.autoplay) {
			this.slides.addEvents({
				'mouseenter': function() {
					this.stopAutoplay();
				}.bind(this),
				'mouseleave': function() {
					this.startAutoplay();
				}.bind(this)
			});	
		}
		
		if (this.options.indexBtns) {
			this.indexBtns = getElements(this.options.indexBtns);
			this.indexBtns[this.curIndex].addClass('active');
			this.indexBtns.each(function(indexBtn, i) {
				indexBtn.addEvent('click', function() {
					this.changeToSlide(i);
					if (this.options.autoplay) {
						this.stopAutoplay();
						this.startAutoplay();
					}
					// for anchor 
					return false;
				}.bind(this));	
			}, this);
		}
		
		if (this.options.preBtn) {
			this.preBtn = getElement(this.options.preBtn);
			this.preBtn.addEvent('click', function() {
				this.cycleBack();
				if (this.options.autoplay) {
					this.stopAutoplay();
					this.startAutoplay();
				}
				// for anchor 
				return false;	
			}.bind(this));
		}   
		
		if (this.options.nextBtn) {
			this.nextBtn = getElement(this.options.nextBtn);
			this.nextBtn.addEvent('click', function() {
				this.cycleForward();
				if (this.options.autoplay) {
					this.stopAutoplay();
					this.startAutoplay();
				}
				// for anchor 
				return false;	
			}.bind(this));
		} 
	}	     
});



/**
 *	One-direaction Horizontal Slider
 */ 
var OHSlider = new Class({ 
	
	Extends: HSlider,
	
	initialize: function(slides, options) {
		this.parent(slides, options);	
	}, 
	
	/**
	 *	切换slide
	 */	 	
    changeToSlide: function(iToChange) {
    	if (this.ignore) return; 
    	this.parent(iToChange);  
    },  
    
    /**
     *  前进
     */	     
    cycleForward: function() {    
    	if (this.ignore) return;
        if (this.curIndex < this.slides.length - 1) {
            this.changeToSlide(this.curIndex + 1);
        } else if (this.options.circle) {
            this.cycleToFirst();
        }
    }, 
    
    /**
     *  后退
     */	     
    cycleBack: function() { 
    	if (this.ignore) return;
        if (this.curIndex > 0) {
            this.changeToSlide(this.curIndex - 1);
        } else if (this.options.circle) {
            this.cycleToLast();
        }    
    },  
    
    /**
     *	向左滚动切换回第一条
     */
	cycleToFirst: function() {
		var left = this.sildesWrapper.getStyle('margin-left').toInt();
		var slideWidth = this.slideSize.x.toInt();
		this.slides[0].inject(this.sildesWrapper);
		this.sildesWrapper.setStyle('margin-left', left + slideWidth); 
		
		// fixed the quick click bug
		this.ignore = true;
		
		this.sildesWrapper.get('tween').start('margin-left', left).chain(function() { 
			this.slides[0].inject(this.sildesWrapper, 'top');
			this.sildesWrapper.setStyle('margin-left', 0);
			this.fireEvent('show', [0]); 
			this.ignore = false;
        }.bind(this)); 
        
        this.fireEvent('change', [0]);
        
   		if (this.indexBtns) {
   			this.indexBtns[this.slides.length - 1].removeClass('active');
	        this.indexBtns[0].addClass('active');
	    } 
		
		this.curIndex = 0; 
	} ,  
    
    /**
     *	向右滚动切换至最后一条
     */
	cycleToLast: function() {
		var lastIndex = this.slides.length - 1;
		var slideWidth = this.slideSize.x.toInt();
		this.slides[lastIndex].inject(this.sildesWrapper, 'top');
		this.sildesWrapper.setStyle('margin-left', -slideWidth);  
		
		// fixed the quick click bug
		this.ignore = true;
		
		this.sildesWrapper.get('tween').start('margin-left', 0).chain(function() {
			this.slides[lastIndex].inject(this.sildesWrapper);
			this.sildesWrapper.setStyle('margin-left', - (slideWidth * lastIndex)) ;  
        	this.fireEvent('show', [lastIndex]);
        	this.ignore = false;
        }.bind(this)); 
        
        this.fireEvent('change', [lastIndex]);
        
   		if (this.indexBtns) {   
			this.indexBtns[0].removeClass('active');
	        this.indexBtns[lastIndex].addClass('active');
	    } 
		
		this.curIndex = lastIndex; 
	}
});



/**
 * 	Vertical Slider
 */  
var VSlider = new Class({ 
	
	Extends: HSlider,
	
	initialize: function(slides, options) {
		this.parent(slides, options);	
	},
	
	/**
     *	初始化slides
     */	     
    initSlides: function() {
    	this.sildesWrapper = new Element('div', {
            styles: {
                width: this.slideSize.x,
                height: ( this.slideSize.y ) * ( this.slides.length ),
                overflow: 'hidden',
                zoom: '1'
            },
            tween: {
                duration: this.options.duration,
                transition: this.options.transition
            }
        });
        
        this.slides.each(function(slide) { 
        	slide.inject(this.sildesWrapper);
        }, this);  
        
        this.container.setStyle('overflow', 'hidden');
        this.sildesWrapper.inject(this.container); 
        
        this.curIndex = this.options.startIndex;    
        this.sildesWrapper.setStyle('margin-top', - (this.slideSize.y * this.curIndex));
        this.fireEvent('change', [this.curIndex]);
        this.fireEvent('show', [this.curIndex]);
        
    },  
	
	/**
     *  显示第i项
     */	     
    showSlide: function(iToShow) {                                              
	    this.sildesWrapper.get('tween').start('margin-top', - (this.slideSize.y * iToShow)).chain(function() {
        	this.fireEvent('show', [iToShow]);
        }.bind(this)); 
   		if (this.indexBtns) {
	        this.indexBtns[iToShow].addClass('active');
	    }  
    }	     
});



/**
 *	One-direaction Vertical Slider
 */ 
var OVSlider = new Class({ 
	
	Extends: VSlider,
	
	initialize: function(slides, options) {
		this.parent(slides, options);	
	},   
	
	/**
	 *	切换slide
	 */	 	
    changeToSlide: function(iToChange) {
    	if (this.ignore) return; 
    	this.parent(iToChange);  
    },  
    
    /**
     *  前进
     */	     
    cycleForward: function() {    
    	if (this.ignore) return;
        if (this.curIndex < this.slides.length - 1) {
            this.changeToSlide(this.curIndex + 1);
        } else if (this.options.circle) {
            this.cycleToFirst();
        }
    }, 
    
    /**
     *  后退
     */	     
    cycleBack: function() { 
    	if (this.ignore) return;
        if (this.curIndex > 0) {
            this.changeToSlide(this.curIndex - 1);
        } else if (this.options.circle) {
            this.cycleToLast();
        }    
    },  
    
    /**
     *	向上滚动切换回第一条
     */
	cycleToFirst: function() {
		var top = this.sildesWrapper.getStyle('margin-top').toInt();
		var slideHeight = this.slideSize.y.toInt();
		this.slides[0].inject(this.sildesWrapper);
		this.sildesWrapper.setStyle('margin-top', top + slideHeight);
		
		// fixed the quick click bug
		this.ignore = true;
		
		this.sildesWrapper.get('tween').start('margin-top', top).chain(function() {
			this.slides[0].inject(this.sildesWrapper, 'top');
			this.sildesWrapper.setStyle('margin-top', 0);  
        	this.fireEvent('show', [0]);
			this.ignore = false;
        }.bind(this));
        
        this.fireEvent('change', [0]); 
        
   		if (this.indexBtns) {    
   			this.indexBtns[this.slides.length - 1].removeClass('active');
	        this.indexBtns[0].addClass('active');
	    } 
		
		this.curIndex = 0; 
	},
    
    /**
     *	向下滚动切换至最后一条
     */
	cycleToLast: function() {
		var lastIndex = this.slides.length - 1;
		var slideHeight = this.slideSize.y.toInt();
		this.slides[lastIndex].inject(this.sildesWrapper, 'top');
		this.sildesWrapper.setStyle('margin-top', -slideHeight);  
		
		// fixed the quick click bug
		this.ignore = true;
		
		this.sildesWrapper.get('tween').start('margin-top', 0).chain(function() {
			this.slides[lastIndex].inject(this.sildesWrapper);
			this.sildesWrapper.setStyle('margin-top', - (slideHeight * lastIndex)) ;  
        	this.fireEvent('show', [lastIndex]);
        	this.ignore = false;
        }.bind(this)); 
        
        this.fireEvent('change', [lastIndex]);
        
   		if (this.indexBtns) {   
			this.indexBtns[0].removeClass('active');
	        this.indexBtns[lastIndex].addClass('active');
	    } 
		
		this.curIndex = lastIndex; 
	}
});



/**
 * 	FadeSlider
 */  
var FadeSlider = new Class({ 
	
	Extends: HSlider,
	
	initialize: function(slides, options) { 
		this.parent(slides, options);	
	},
	
	/**
     *	初始化slides
     */	     
    initSlides: function() {      
    	this.sildesWrapper = new Element('div', { 
            styles: {
                width: this.slideSize.x,
                height: this.slideSize.y,
                position: 'relative'
            }
        });
        
		this.slides.setStyles({
    		'display': 'none',
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'opacity': 0
		});
		
		this.slides.set('tween', {
            duration: this.options.duration,
            transition: this.options.transition
        });
		
		this.slides.inject(this.sildesWrapper);
		this.sildesWrapper.inject(this.container);
		
        this.curIndex = this.options.startIndex;
        this.slides[this.curIndex].setStyles({
    		'display': 'block',
    		'opacity': 1
		}); 
        this.fireEvent('change', [this.curIndex]);
        this.fireEvent('show', [this.curIndex]);
    },
    
    /**
     *  显示第i项
     */	     
    showSlide: function(iToShow) {    
	    this.slides[iToShow].setStyle('display', 'block').get('tween').start('opacity', 1).chain(function() {
        	this.fireEvent('show', [iToShow]);
        }.bind(this)); 

   		if (this.indexBtns) {
	        this.indexBtns[iToShow].addClass('active');
	    }  
    },
    
    /**
     *  隐藏第i项
     */	  
    hideSlide: function(iToHide) {
		this.slides[iToHide].get('tween').start('opacity', 0).chain(function() {
			this.slides[iToHide].setStyle('display', 'none');
        }.bind(this)); 
		
		if (this.indexBtns) {
	        this.indexBtns[iToHide].removeClass('active');
		}	
	}    
});	   



/**
 * 	Mover
 */  
var Mover = new Class({ 
	
	Extends: HSlider,
	
	options: {
		duration: 500,		// 动画时间 
		transition: Fx.Transitions.Quart.easeOut,	// 动画效果   
        
		startIndex: 0,		// 起始索引
		viewLength: 1,      // 可见的条目数
		circle: true,		// 是否循环
        autoplay: false,	// 是否自动播放
        interval: 5000, 	// 自动播放间隔 
        
		indexBtns: '',		// 索引 css selector
        preBtn: '', 		// 后退按钮 css selector
        nextBtn: '',		// 前进按钮 css selector  
		container: '', 		// 指定外层容器（父元素） 
        
        onChange: function(i) {},	// 开始变换时
		onShow: function(i) {}     // 变换结束时		
    },
	
	initialize: function(slides, options) { 
		// 处理参数
		this.slides = $$(slides); 
		if (!this.slides.length) { return false; }
		
		this.setOptions(options);
		  
		this.slideSize = mesureSize(this.slides[0]);
        
        // 初始化slides并显示起始项 
        this.initSlides();  
        
        // 自动播放
        if (this.options.autoplay) {
            this.startAutoplay();
        }
        
        // 绑定事件
        this.attach();	
	},
	
	/**
     *	初始化slides
     */	     
    initSlides: function() { 
		this.container = this.slides[0].getParent();   
    	this.container.setStyle('width', this.slideSize.outerX * (this.slides.length + 1));  
		
		this.container.set('tween', {
            duration: this.options.duration,
            transition: this.options.transition
        });
		
        this.curIndex = this.options.startIndex;
        this.container.setStyles({
    		'margin-left': - this.slideSize.outerX * this.curIndex
		}); 
        this.fireEvent('change', [this.curIndex]);
        this.fireEvent('show', [this.curIndex]);
    },
    
    /**
     *  显示第i项
     */	     
    showSlide: function(iToShow) {
        this.container.get('tween').start('margin-left', - this.slideSize.outerX * iToShow).chain(function() {
        	this.fireEvent('show', [iToShow]);
        }.bind(this)); 
   		if (this.indexBtns) {
	        this.indexBtns[iToShow].addClass('active');
	    }; 
    },
    
    /**
     *  前进
     */	     
    cycleForward: function() {
        if (this.curIndex < this.slides.length - this.options.viewLength) {
            this.changeToSlide(this.curIndex + 1);
        } else if (this.options.circle) {
            this.changeToSlide(0);
        }
    },  
    
    /**
     *  后退
     */	     
    cycleBack: function() {
        if (this.curIndex > 0) {
            this.changeToSlide(this.curIndex - 1);
        } else if (this.options.circle) {
            this.changeToSlide(this.slides.length - this.options.viewLength);
        }    
    },   
    
    /**
     *  隐藏第i项
     */	  
    hideSlide: function(iToHide) {	
	}    
});	



/**
 * 	getElement
 */ 
function getElement(obj) {
	if (typeOf(obj) == 'string') {
		return document.getElement(obj);
	} else {
		return document.id(obj);
	}	
}                               


/**
 * 	getElements
 */ 
function getElements(obj) {
	return $$(obj);	
}


/**
 *	mesureSize
 */
function mesureSize(elem) {
	var size = elem.getSize(); 
	size.outerX = size.x + elem.getStyle('margin-left').toInt() + elem.getStyle('margin-right').toInt();
	size.outerY = size.y + elem.getStyle('margin-top').toInt() + elem.getStyle('margin-bottom').toInt(); 
	
	if (size.x == 0 || size.y == 0) {
		// clone for mesure
		var clone = elem.clone();
		clone.setStyle('opacity', '0').inject(document.getElement('body'));
		size = clone.getSize();
		size.outerX = size.x + clone.getStyle('margin-left').toInt() + clone.getStyle('margin-right').toInt();
		size.outerY = size.y + clone.getStyle('margin-top').toInt() + clone.getStyle('margin-bottom').toInt(); 
		clone.destroy();
	}
	return size;
} 