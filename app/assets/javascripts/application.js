// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require twitter/bootstrap/modal
//= require mustache
//= require retina
//= require smoothscroll
//= require waypoints
//= require parallax
//= require jquery.mixitup
//= require jquery.easing
//= require jquery.fittext
//= require jquery.localscroll
//= require jquery.scrollto
//= require jquery.appear
//= require jquery.waitforimages
//= require jquery.bxslider
//= require jquery.fitvids
//= require main
//= require shortcodes
//= require jquery.slicknav
//= require_tree ../../templates
jQuery(document).ready(function() {
	
	jQuery(function(){
		$('#menu').slicknav();
	});
	
	//// Preloader, hide all page content until window.load
	jQuery('.loadingGif').show();
	
	//// Detect click from releases view and generate correct release display
	jQuery(".releaseClick").click(function() {
		var id = jQuery(this).prev('.modal-object-id').val();
		var releasesPosition = jQuery("#section3").scrollTop();
		jQuery.ajax({
			dataType: "json",
			url: "./works/work_show_via_ajax_call",
			data: {id: id},
			success: function(data) {
				var release_content = SMT['releaseshow'](data);
				jQuery(window).scrollTo('#section3', {duration:200, offset:-65});
				jQuery('#releaseShowWrapper').fadeIn(750);
				jQuery('#releaseShowContent').empty().hide().append(release_content).fadeIn(750, function() {
					jQuery(".video").fitVids();
					jQuery("#fitvids").fitVids();
				});
			}
		});
	});
	jQuery(document).on("click", ".nextClick", function () {
		var id = jQuery(this).prev('.modal-object-id').val();
		var releasesPosition = jQuery("#section3").scrollTop();
		jQuery.ajax({
			dataType: "json",
			url: "./works/work_show_next_via_ajax_call",
			data: {id: id},
			success: function(data) {
				var release_content = SMT['releaseshow'](data);
				jQuery(window).scrollTo('#section3', {duration:200, offset:-65});
				jQuery('#releaseShowWrapper').fadeIn(750);
				jQuery('#releaseShowContent').empty().hide().append(release_content).fadeIn(750);
			}
		});
	});
	jQuery(document).on("click", ".prevClick", function () {
		var id = jQuery(this).prev('.modal-object-id').val();
		var releasesPosition = jQuery("#section3").scrollTop();
		jQuery.ajax({
			dataType: "json",
			url: "./works/work_show_prev_via_ajax_call",
			data: {id: id},
			success: function(data) {
				var release_content = SMT['releaseshow'](data);
				jQuery(window).scrollTo('#section3', {duration:200, offset:-65});
				jQuery('#releaseShowWrapper').fadeIn(750);
				jQuery('#releaseShowContent').empty().hide().append(release_content).fadeIn(750);
			}
		});
	});
	jQuery(".nextClick").click(function() {
		var id = jQuery(this).prev('.modal-object-id').val();
		console.log('Hello');
	});
	//// Close release display on icon click
	jQuery('#removeRelease').click(function() {
		jQuery('#releaseShowWrapper').fadeOut(500, function(){
			jQuery("#releaseShowWrapper").hide();
			jQuery('#portfolio-grid').show();
		///	jQuery("#releaseShowContent").empty();
		});
	});
	
	jQuery('#btnClick').click(function() {
		jQuery('.about').fadeOut('fast', function() {
			jQuery('.about2').fadeIn();
		});
	});
	jQuery('#btn2Click').click(function() {
		jQuery('.about2').fadeOut('fast', function() {
			jQuery('.about').fadeIn();	
		});
	});
	
	jQuery('.closebtn').click(function() {
	    document.getElementById("myNav").style.height = "0%";
	});
	
	jQuery(window).scroll(function(){                          
		if ($(this).scrollTop()>=$('#section2').position().top - 65) {
	    	$('#naviMenu').slideDown(250);
	    } else {
	    	$('#naviMenu').slideUp(250);
	    }
	});
	
	var url = window.location;
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	$('ul.nav a').filter(function() {
		return this.href == url;
	}).parent().addClass('active');
	
});

//// Load page content once it has been preloaded
jQuery(window).load(function() {
	jQuery('.loadingGif').hide();
  	jQuery('.body').fadeIn(300);
});

