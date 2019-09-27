/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1024px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly({ offset: 44 })
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Prevent default behavior.
							event.preventDefault();

						// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

			// Initialize scrollzer.
				$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#header" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #header, #wrapper')
						.css('transition', 'none');

	});

})(jQuery);

//Show functions
function showBIMNo() {
	document.getElementById('BIMYesno').style.display = "inline";
	document.getElementById('Y10').style.display = "none";
}

function showBIMYes() {
	document.getElementById('BIMYes').style.display = "inline";
	document.getElementById('BIMYesno').style.display = "inline";
	document.getElementById('N10').style.display = "none";
}

function showWhyEPBYes() {
	document.getElementById('WhyEPBYes').style.display = "inline";
	document.getElementById('N1').style.display = "none";
}

function showWhyEPBNo() {
	document.getElementById('WhyEPBNo').style.display = "inline";
	document.getElementById('Y1').style.display = "none";
}

function showPersonalAYes() {
	document.getElementById('PersonalAYes').style.display = "inline";
	document.getElementById('PersonalAYesNo').style.display = "inline";
	document.getElementById('N2').style.display = "none";
}

function showPersonalANo() {
	document.getElementById('PersonalANo').style.display = "inline";
	document.getElementById('PersonalAYesNo').style.display = "inline";
	document.getElementById('Y2').style.display = "none";
}

function showPersonalTips() {
	document.getElementById('PersonalTips').style.display = "inline";
	document.getElementById('N3').style.display = "none";
}

function showPersonalTipsNo() {
	document.getElementById('Y3').style.display = "none";
}

function showSMSFegYes() {
	document.getElementById('SMSFegYes').style.display = "inline";
	document.getElementById('N4').style.display = "none";
}

function showSMSFContinue() {
	document.getElementById('SMSFContinue').style.display = "inline";
	document.getElementById('Y4').style.display = "none";
	document.getElementById('Y5').style.display = "none";
}

function showSMSFegYesYes() {
	document.getElementById('SMSFegYesYes').style.display = "inline";
	document.getElementById('SMSFContinue').style.display = "inline";
	document.getElementById('N5').style.display = "none";
}

function showCompanyegYesNo() {
	document.getElementById('CompanyegYesNo').style.display = "inline";
	document.getElementById('Y7').style.display = "none";
}

function showCompanyegYes() {
	document.getElementById('CompanyegYes').style.display = "inline";
	document.getElementById('CompanyegYesNo').style.display = "inline";
	document.getElementById('N7').style.display = "none";
}

function showCompanyRoleNo() {
	document.getElementById('CompanyRoleNo').style.display = "inline";
	document.getElementById('CompanyRoleYesNo').style.display = "inline";
	document.getElementById('Y6').style.display = "none";
}

function showCompanyRoleYes() {
	document.getElementById('CompanyRoleYes').style.display = "inline";
	document.getElementById('CompanyRoleYesNo').style.display = "inline";
	document.getElementById('N6').style.display = "none";
}

function showTrustegYesNo() {
	document.getElementById('TrustegYesNo').style.display = "inline";
	document.getElementById('Y9').style.display = "none";
}

function showTrustegYes() {
	document.getElementById('TrustegYes').style.display = "inline";
	document.getElementById('TrustegYesNo').style.display = "inline";
	document.getElementById('N9').style.display = "none";
}

function showTrustFNo() {
	document.getElementById('TrustFNo').style.display = "inline";
	document.getElementById('TrustFYesNo').style.display = "inline";
	document.getElementById('Y8').style.display = "none";
}

function showTrustFYes() {
	document.getElementById('TrustFYesNo').style.display = "inline";
	document.getElementById('N8').style.display = "none";
}

function showQuestionsEP() {
	document.getElementById('QuestionsEP').style.display = "inline";
	document.getElementById('DIYWillKit').style.display = "none";
}

function showAcceptYes() {
	document.getElementById('AcceptYes').style.display = "inline";
	document.getElementById('QAcceptNo').style.display = "none";
}

function showAcceptNo() {
	document.getElementById('AcceptNo').style.display = "inline";
	document.getElementById('QAcceptYes').style.display = "none";
}

function showEPI() {
	//Sidebar
	document.getElementById('Functionality').style.display = "none";
	document.getElementById('nav').style.display = "inline"

	//What is estate planning
	document.getElementById('WhatEP').style.display = "inline"
	
	//Why estate planning
	document.getElementById('WhyEPA').style.display = "inline"
	
	//About executors
	document.getElementById('Exec').style.display = "inline"
		
	//About guardians
	document.getElementById('Guard').style.display = "inline"

	//How assets are held
	document.getElementById('Howheld').style.display = "inline"

	//Personally held assets
	document.getElementById('Personal').style.display = "inline"

	//Estate challenge
	document.getElementById('FP').style.display = "inline"
	
	//Superannuation
	document.getElementById('superannuation').style.display = "inline"
	document.getElementById('SMSF').style.display = "inline"

	//Companies
	document.getElementById('Company').style.display = "inline"

	//Trusts
	document.getElementById('Trusts').style.display = "inline"

	//Partnership interest
	document.getElementById('PS').style.display = "inline";
	
	//Business interest 
	document.getElementById('BIA').style.display = "inline";

	//Overseas assets
	document.getElementById('OS').style.display = "inline";
	
	//Final comments
	document.getElementById('FC').style.display = "inline";
}

function showEPAYes() {
	document.getElementById('EPAYes').style.display = "inline";
	document.getElementById('EPAFinal').style.display = "inline";
	document.getElementById('N11').style.display = "none";
}

function showEPANo() {
	document.getElementById('EPANo').style.display = "inline";
	document.getElementById('EPAFinal').style.display = "inline";
	document.getElementById('Y11').style.display = "none";
}

function showDIYWill() {
	document.getElementById('DIYWill').style.display = "inline";
	document.getElementById('LearnEP').style.display = "none";
}

function handleDIYWill() {
	document.getElementById('DIYWill').style.display = "inline";
	document.getElementById('ThankYouButton').style.display = "none";
	document.getElementById('NavDIY').style.display = "list-item";
}

function handleNoThankYou() {
	document.getElementById('ThankYou').style.display = "inline";
	document.getElementById('DIYWillButton').style.display = "none";
}

function showIefyes() {
	document.getElementById('iefyes').style.display = "inline";
	document.getElementById('iefyesno').style.display = "inline";
	document.getElementById('N12').style.display = "none";
}

function showIefno() {
	document.getElementById('iefyesno').style.display = "inline";
	document.getElementById('Y12').style.display = "none";
}

function showWefyes() {
	document.getElementById('wefboth').style.display = "inline";
	document.getElementById('wefyes').style.display = "inline";
	document.getElementById('N13').style.display = "none";
}

function showWefno() {
	document.getElementById('wefno').style.display = "inline";
	document.getElementById('wefboth').style.display = "inline";
	document.getElementById('Y13').style.display = "none";
}

function showDownload() {
	document.getElementById('download').style.display = "inline";
}

function showWill() {
	document.getElementById('will').style.display = "inline";
}

function showConclusion() {
	let will = document.getElementById('will')
	if (will.style.display === 'inline') {
		document.getElementById('conclusion').style.display = "inline";
	}
}

//Handle functions
function handleQ23QLDButton() {
	document.getElementById('Q23NSWButton').style.display = "none";
	document.getElementById('Q23VICButton').style.display = "none";
	document.getElementById('Q23WAButton').style.display = "none";
	document.getElementById('Q23SAButton').style.display = "none";
	document.getElementById('Q23NTButton').style.display = "none";
	document.getElementById('Q23TASButton').style.display = "none";
	document.getElementById('Q23QLD').style.display = "inline";
}

function handleQ23NSWButton() {
	document.getElementById('Q23QLDButton').style.display = "none";
	document.getElementById('Q23VICButton').style.display = "none";
	document.getElementById('Q23WAButton').style.display = "none";
	document.getElementById('Q23SAButton').style.display = "none";
	document.getElementById('Q23NTButton').style.display = "none";
	document.getElementById('Q23TASButton').style.display = "none";
	document.getElementById('Q23NSW').style.display = "inline";
}

function handleQ23VICButton() {
	document.getElementById('Q23NSWButton').style.display = "none";
	document.getElementById('Q23QLDButton').style.display = "none";
	document.getElementById('Q23WAButton').style.display = "none";
	document.getElementById('Q23SAButton').style.display = "none";
	document.getElementById('Q23NTButton').style.display = "none";
	document.getElementById('Q23TASButton').style.display = "none";
	document.getElementById('Q23VIC').style.display = "inline";
}

function handleQ23WAButton() {
	document.getElementById('Q23NSWButton').style.display = "none";
	document.getElementById('Q23VICButton').style.display = "none";
	document.getElementById('Q23QLDButton').style.display = "none";
	document.getElementById('Q23SAButton').style.display = "none";
	document.getElementById('Q23NTButton').style.display = "none";
	document.getElementById('Q23TASButton').style.display = "none";
	document.getElementById('Q23WA').style.display = "inline";
}

function handleQ23SAButton() {
	document.getElementById('Q23NSWButton').style.display = "none";
	document.getElementById('Q23VICButton').style.display = "none";
	document.getElementById('Q23WAButton').style.display = "none";
	document.getElementById('Q23SAButton').style.display = "none";
	document.getElementById('Q23NTButton').style.display = "none";
	document.getElementById('Q23TASButton').style.display = "none";
	document.getElementById('Q23SA').style.display = "inline";
}

function handleQ23NTButton() {
	document.getElementById('Q23NSWButton').style.display = "none";
	document.getElementById('Q23VICButton').style.display = "none";
	document.getElementById('Q23WAButton').style.display = "none";
	document.getElementById('Q23SAButton').style.display = "none";
	document.getElementById('Q23QLDButton').style.display = "none";
	document.getElementById('Q23TASButton').style.display = "none";
	document.getElementById('Q23NT').style.display = "inline";
}

function handleQ23TASButton() {
	document.getElementById('Q23NSWButton').style.display = "none";
	document.getElementById('Q23VICButton').style.display = "none";
	document.getElementById('Q23WAButton').style.display = "none";
	document.getElementById('Q23SAButton').style.display = "none";
	document.getElementById('Q23NTButton').style.display = "none";
	document.getElementById('Q23QLDButton').style.display = "none";
	document.getElementById('Q23TAS').style.display = "inline";
}

function handleQ24Under17Button() {
	document.getElementById('Q2418to30Button').style.display = "none";
	document.getElementById('Q2431to49Button').style.display = "none";
	document.getElementById('Q24Over50Button').style.display = "none";
	document.getElementById('Q24Under17ParagraphA').style.display = "inline";
	document.getElementById('Q24Under17ParagraphB').style.display = "inline";
}

function handleQ2418to30Button() {
	document.getElementById('Q24Under17Button').style.display = "none";
	document.getElementById('Q2431to49Button').style.display = "none";
	document.getElementById('Q24Over50Button').style.display = "none";
	document.getElementById('Q2418to30ParagraphA').style.display = "list-item";
}

function handleQ2431to49Button() {
	document.getElementById('Q2418to30Button').style.display = "none";
	document.getElementById('Q24Under17Button').style.display = "none";
	document.getElementById('Q24Over50Button').style.display = "none";
}

function handleQ24Over50Button() {
	document.getElementById('Q2418to30Button').style.display = "none";
	document.getElementById('Q2431to49Button').style.display = "none";
	document.getElementById('Q24Under17Button').style.display = "none";
}

function handleQ27DefactoYesButton() {
	document.getElementById('Q27DefactoNoButton').style.display = "none";
	document.getElementById('Q27DefactoYesParagraphA').style.display = "list-item";
	document.getElementById('Q27Q29Q210Yes').style.display = "list-item";
	document.getElementById('Q27Q29Q210YesA').style.display = "list-item";
	document.getElementById('Q27210Yes').style.display = "inline";
}

function handleQ27DefactoNoButton() {
	document.getElementById('Q27DefactoYesButton').style.display = "none";
	document.getElementById('Q2729210No').style.display = "list-item";
}

function handleQ29LookingMarriedYesButton() {
	document.getElementById('Q29LookingMarriedNoButton').style.display = "none";
	document.getElementById('Q29Q13YesParagraphA').style.display = "list-item";
	document.getElementById('Q27Q29Q210Yes').style.display = "list-item";
	document.getElementById('Q27Q29Q210YesA').style.display = "list-item";
}

function handleQ29LookingMarriedNoButton() {
	document.getElementById('Q29LookingMarriedYesButton').style.display = "none";
	document.getElementById('Q2729210No').style.display = "list-item";
	document.getElementById('Q29A').style.display = "inline";
	document.getElementById('Q29B').style.display = "inline";	
}

function handleQ210MarriedYesButton() {
	document.getElementById('Q210MarriedNoButton').style.display = "none";
	document.getElementById('Q29Q13YesParagraphA').style.display = "list-item";
	document.getElementById('Q27Q29Q210Yes').style.display = "list-item";
	document.getElementById('Q27Q29Q210YesA').style.display = "list-item";
	document.getElementById('Q27210Yes').style.display = "inline";
}

function handleQ210MarriedNoButton() {
	document.getElementById('Q210MarriedYesButton').style.display = "none";
	document.getElementById('Q2729210No').style.display = "list-item";
}

function handleQ211PreviouslyYesButton() {
	document.getElementById('Q211PreviouslyNoButton').style.display = "none";
	document.getElementById('Q211A').style.display = "inline";
	document.getElementById('Q211B').style.display = "inline";	
}

function handleQ211PreviouslyNoButton() {
	document.getElementById('Q211PreviouslyYesButton').style.display = "none";
}

function handleQ211FormalSettlementYesButton() {
	document.getElementById('Q211FormalSettlementNoButton').style.display = "none";
}

function handleQ211FormalSettlementNoButton() {
	document.getElementById('Q211FormalSettlementYesButton').style.display = "none";
}

function handleQ213ChildrenYesButton() {
	document.getElementById('Q213ChildrenNoButton').style.display = "none";
	document.getElementById('Q213Yes').style.display = "list-item";
	document.getElementById('Q213YesA').style.display = "list-item";
	document.getElementById('Q213YesB').style.display = "list-item";
	document.getElementById('Q213YesC').style.display = "inline";
	document.getElementById('Q213YA').style.display = "inline";	
	document.getElementById('Q213YB').style.display = "inline";	
	document.getElementById('Q213YC').style.display = "inline";	
	document.getElementById('Q213YD').style.display = "inline";	
	document.getElementById('Q213YE').style.display = "inline";	
	document.getElementById('Q213YF').style.display = "inline";	
}

function handleQ213ChildrenNoButton() {
	document.getElementById('Q213ChildrenYesButton').style.display = "none";
	document.getElementById('Q213No').style.display = "list-item";
	document.getElementById('Q213NA').style.display = "inline";	
	document.getElementById('Q213NB').style.display = "inline";	
}

function handleQ215PriorChildrenYesButton() {
	document.getElementById('Q215PriorChildrenNoButton').style.display = "none";
}

function handleQ215PriorChildrenNoButton() {
	document.getElementById('Q215PriorChildrenYesButton').style.display = "none";
}

function handleQ216MinorChildrenYesButton() {
	document.getElementById('Q216MinorChildrenNoButton').style.display = "none";
	document.getElementById('Q216MinorChildrenYesParagraphA').style.display = "inline";
	document.getElementById('Q216MinorChildrenYesParagraphB').style.display = "list-item";
	document.getElementById('Q216MinorChildrenYesParagraphC').style.display = "list-item";
	document.getElementById('Q216MinorChildrenYesParagraphD').style.display = "inline";
	document.getElementById('Q216MinorChildrenYesParagraphE').style.display = "list-item";
	document.getElementById('Q16Q18Yes').style.display = "list-item";
	document.getElementById('NavQ16').style.display = "list-item";
}

function handleQ216MinorChildrenNoButton() {
	document.getElementById('Q216MinorChildrenYesButton').style.display = "none";
}

function handleQ217SpecialChildrenYesButton() {
	document.getElementById('Q217SpecialChildrenNoButton').style.display = "none";
	document.getElementById('Q217Yes').style.display = "inline";
}

function handleQ217SpecialChildrenNoButton() {
	document.getElementById('Q217SpecialChildrenYesButton').style.display = "none";
}

function handleQ218FutureChildrenYesButton() {
	document.getElementById('Q218FutureChildrenNoButton').style.display = "none";
	document.getElementById('Q218Yes').style.display = "list-item";
	document.getElementById('Q16Q18Yes').style.display = "list-item";
}


function handleQ218FutureChildrenNoButton() {
	document.getElementById('Q218FutureChildrenYesButton').style.display = "none";
}

function handleQ219DependentYesButton() {
	document.getElementById('Q219DependentNoButton').style.display = "none";
}

function handleQ219DependentNoButton() {
	document.getElementById('Q219DependentYesButton').style.display = "none";
}

function handleQ220ExistingWillYesButton() {
	document.getElementById('Q220ExistingWillNoButton').style.display = "none";
}

function handleQ220ExistingWillNoButton() {
	document.getElementById('Q220ExistingWillYesButton').style.display = "none";
}

function handleQ221JointAssetsYesButton() {
	document.getElementById('Q221JointAssetsNoButton').style.display = "none";
	document.getElementById('Q221JointAssetsUnsureButton').style.display = "none";
	document.getElementById('Q221JointAssetsYesParagraphA').style.display = "list-item";
	document.getElementById('Q221Yes').style.display = "list-item";
	document.getElementById('Q221A').style.display = "inline";	
	document.getElementById('Q221B').style.display = "inline";	
}

function handleQ221JointAssetsNoButton() {
	document.getElementById('Q221JointAssetsYesButton').style.display = "none";
	document.getElementById('Q221JointAssetsUnsureButton').style.display = "none";
	document.getElementById('Q222JointButtonA').style.display = "inline";
	document.getElementById('Q222JointButtonB').style.display = "inline";
	document.getElementById('Q222JointButtonC').style.display = "inline";
	document.getElementById('Q222JointButtonD').style.display = "inline";
	document.getElementById('Q222JointButtonE').style.display = "inline";
	document.getElementById('Q222JointButtonF').style.display = "inline";
	document.getElementById('Q222JointButtonG').style.display = "inline";
	document.getElementById('Q222JointButtonH').style.display = "inline";
	document.getElementById('Q222JointButtonNo').style.display = "inline";
}

function handleQ221JointAssetsUnsureButton() {
	document.getElementById('Q221JointAssetsYesButton').style.display = "none";
	document.getElementById('Q221JointAssetsNoButton').style.display = "none";
	document.getElementById('Q221JointButtonUnsure').style.display = "inline";
	document.getElementById('Q222JointButtonA').style.display = "inline";
	document.getElementById('Q222JointButtonB').style.display = "inline";
	document.getElementById('Q222JointButtonC').style.display = "inline";
	document.getElementById('Q222JointButtonD').style.display = "inline";
	document.getElementById('Q222JointButtonE').style.display = "inline";
	document.getElementById('Q222JointButtonF').style.display = "inline";
	document.getElementById('Q222JointButtonG').style.display = "inline";
	document.getElementById('Q222JointButtonH').style.display = "inline";
	document.getElementById('Q222JointButtonNo').style.display = "inline";
}

function handleQ222JointTenantsButton() {
	document.getElementById('Q222TenantsInCommonButton').style.display = "none";
	document.getElementById('Q222NotSureButton').style.display = "none";
	document.getElementById('Q222JointButtonA').style.display = "inline";
	document.getElementById('Q222JointButtonB').style.display = "inline";
	document.getElementById('Q222JointButtonC').style.display = "inline";
	document.getElementById('Q222JointButtonD').style.display = "inline";
	document.getElementById('Q222JointButtonE').style.display = "inline";
	document.getElementById('Q222JointButtonF').style.display = "inline";
	document.getElementById('Q222JointButtonG').style.display = "inline";
	document.getElementById('Q222JointButtonH').style.display = "inline";
	document.getElementById('Q222JointButtonYes').style.display = "inline";
}

function handleQ222TenantsInCommonButton() {
	document.getElementById('Q222JointTenantsButton').style.display = "none";
	document.getElementById('Q222NotSureButton').style.display = "none";
	document.getElementById('Q222JointButtonA').style.display = "inline";
	document.getElementById('Q222JointButtonB').style.display = "inline";
	document.getElementById('Q222JointButtonC').style.display = "inline";
	document.getElementById('Q222JointButtonD').style.display = "inline";
	document.getElementById('Q222JointButtonE').style.display = "inline";
	document.getElementById('Q222JointButtonF').style.display = "inline";
	document.getElementById('Q222JointButtonG').style.display = "inline";
	document.getElementById('Q222JointButtonH').style.display = "inline";
	document.getElementById('Q222JointButtonYes').style.display = "inline";
}

function handleQ222NotSureButton() {
	document.getElementById('Q222TenantsInCommonButton').style.display = "none";
	document.getElementById('Q222JointTenantsButton').style.display = "none";
	document.getElementById('Q222NotSureButtonA').style.display = "inline";
	document.getElementById('Q222NotSureButtonB').style.display = "inline";
	document.getElementById('Q222NotSureButtonC').style.display = "inline";
	document.getElementById('Q222NotSureButtonD').style.display = "inline";
	document.getElementById('Q222NotSureButtonE').style.display = "inline";	
	document.getElementById('Q222JointButtonYes').style.display = "inline";
}

function handleQ225CompaniesYesButton() {
	document.getElementById('Q225CompaniesNoButton').style.display = "none";
	document.getElementById('Q225Q226YesParagraphA').style.display = "list-item";
	document.getElementById('Q225Yes').style.display = "list-item";
	document.getElementById('QRelatedEntitiesA').style.display = "inline";
	document.getElementById('Q225YesA').style.display = "inline";
	document.getElementById('NavQ25').style.display = "list-item";
}

function handleQ225CompaniesNoButton() {
	document.getElementById('Q225CompaniesYesButton').style.display = "none";
}

function handleQ226TrustsYesButton() {
	document.getElementById('Q226TrustsNoButton').style.display = "none";
	document.getElementById('Q225Q226YesParagraphA').style.display = "list-item";
	document.getElementById('Q226Yes').style.display = "list-item";
	document.getElementById('QRelatedEntitiesA').style.display = "inline";
	document.getElementById('Q226YesA').style.display = "inline";
	document.getElementById('NavQ26').style.display = "list-item";
}

function handleQ226TrustsNoButton() {
	document.getElementById('Q226TrustsYesButton').style.display = "none";
}

function handleQ227SMSFYesButton() {
	document.getElementById('Q227SMSFNoButton').style.display = "none";
	document.getElementById('QRelatedEntitiesA').style.display = "inline";
	document.getElementById('Q227SMSFYes').style.display = "list-item";
	document.getElementById('Q227SMSFYesA').style.display = "inline";
	document.getElementById('Q227SMSFYesB').style.display = "inline";
	document.getElementById('Q227SMSFYesC').style.display = "inline";
	document.getElementById('Q227SMSFYesD').style.display = "inline";
	document.getElementById('Q227SMSFYesE').style.display = "inline";
	document.getElementById('Q227SMSFYesF').style.display = "inline";
	document.getElementById('Q227SMSFYesG').style.display = "inline";
	document.getElementById('Q227SMSFYesH').style.display = "inline";
}

function handleQ227SMSFNoButton() {
	document.getElementById('Q227SMSFYesButton').style.display = "none";
}

function handleQ228PartnershipYesButton() {
	document.getElementById('Q228PartnershipNoButton').style.display = "none";
	document.getElementById('QRelatedEntitiesA').style.display = "inline";
	document.getElementById('Q228YesA').style.display = "inline";
	document.getElementById('NavQ28').style.display = "list-item";
}

function handleQ228PartnershipNoButton() {
	document.getElementById('Q228PartnershipYesButton').style.display = "none";
}

function handleQ229BusinessYesButton() {
	document.getElementById('Q229BusinessNoButton').style.display = "none";
	document.getElementById('Q229BusinessYesParagraphA').style.display = "list-item";
	document.getElementById('QRelatedEntitiesA').style.display = "inline";
	document.getElementById('Q229YesA').style.display = "inline";	
	document.getElementById('Q229A').style.display = "inline";	
	document.getElementById('Q229B').style.display = "inline";
	document.getElementById('NavQ29').style.display = "list-item";	
}

function handleQ229BusinessNoButton() {
	document.getElementById('Q229BusinessYesButton').style.display = "none";
}

function handleQ230BusinessMultiYesButton() {
	document.getElementById('Q230BusinessMultiNoButton').style.display = "none";
	document.getElementById('Q230BusinessMultiYesParagraphA').style.display = "list-item";
	document.getElementById('Q230Yes').style.display = "list-item";
	document.getElementById('Q230YesA').style.display = "inline";
	document.getElementById('Q230YesB').style.display = "inline";
	document.getElementById('Q230YesC').style.display = "inline";
	document.getElementById('Q230YesD').style.display = "inline";
	document.getElementById('Q230YesE').style.display = "inline";
	document.getElementById('Q230YesF').style.display = "inline";
	document.getElementById('Q230YesG').style.display = "inline";
	document.getElementById('Q230YesH').style.display = "inline";
	document.getElementById('Q230YesI').style.display = "inline";
	document.getElementById('Q230YesJ').style.display = "inline";
	document.getElementById('Q230YesK').style.display = "inline";
}

function handleQ230BusinessMultiNoButton() {
	document.getElementById('Q230BusinessMultiYesButton').style.display = "none";
}

function handleQ231OverseasYesButton() {
	document.getElementById('Q231OverseasNoButton').style.display = "none";
	document.getElementById('Q231Yes').style.display = "list-item";
	document.getElementById('Q231YesA').style.display = "inline";
	document.getElementById('NavQ31').style.display = "list-item";
}

function handleQ231OverseasNoButton() {
	document.getElementById('Q231OverseasYesButton').style.display = "none";
}



