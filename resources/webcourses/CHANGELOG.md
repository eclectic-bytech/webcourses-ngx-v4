### Change Log

#### v2.8.1 May 19, 2021 update
- Added browser check and notifications with resolution steps on outdated browsers

#### v2.8.0 May 18, 2021 update
- Publisher logo now links to their home page if one is available.
- Language consistency improved

#### v2.7.0 March 20, 2021 update
- Added customised course completion certificates

#### v2.6.7 February 22, 2021 update
- Mobile roll-up button not working #97 fix

#### v2.6.6 February 19, 2021 update
- Activity sidebar UI standardisation and clean-up

#### v2.6.5 February 13, 2021 update
- Minor bug fixes, UI clean-up

#### v2.6.4 February 11, 2021 update
- Minor bug fixes

#### v2.6.3 February 10, 2021 update
- Click-rotate type activity added
- Minor bug fixes

#### v2.6.2 January 26, 2021 update
- Angular 9 to 11 core update
- Module updates
- Minor bug fixes

#### v2.6.1 January 24, 2021 update
- Custom type activities introduced.

#### v2.6.0 January 11, 2021 update
- Drag-n-drop activity type added
- Added to several elements in workarea IDs that can be used for custom styling

#### v2.5.1 August 19, 2020 update

- Minor bug fixes, and post 2.5.0 launch adjustments

#### v2.5.0 August 17, 2020 update

- catalogue courses now link to course information pages
- student first and last names are now collected when entering a course

#### v2.4.0 July 6, 2020 update

- Updated Angular and npm packages
- Replaced first Slim framework API end-point with Lumen
- Streamlined a couple other API end-points

#### v2.3.2 June 22, 2020 update

- Google Analytics added
- Minor CSS updates

#### v2.3.1 June 18, 2020 update

- Help section added. Hotlinks and instructions are customised based on logged in status and publisher.

#### v2.3.0 June 5, 2020 update

**New workarea:**
- Includes sidebar with course progress, chapter index, publisher info and help. 
- Removed stand alone chapter and activity selection pages and work area's nav bar. All features and more now available from work area's sidebar - all without needing to leave the course. 
- New styling with improved readability across all devices.
- Removed activity meta services. Activities now include a meta property - this greatly simplifies state maintenance.

**Other**
- Basic fade animations added in most areas
- Angular v8.x updated to v9.x
- Updated dozens of NPM libraries
- Introduced API Slim framework
- Hundreds of database updates including simplified table structures
- 500+ commits that include minor bug fixes and edge case scenario handling


#### v2.2.1 March 12, 2020 update
- Group Access Codes added. Slight misnomer at the moment, allows access to private courses not shown in catalogues.
- Chapter Activity Index is by-passed on Continue button on End-Of-Chapter pages and Chapter Index selection (on Course Chapters Index pages)
- Platform version brought up to Semantic Versioning definition, hence the version jump from previous update

#### v1.1.0 February 5, 2020 update
- Student Reports page remembers selected group (app state)

#### January 30, 2020 update
- Changed student report filtering from checkboxes to dropdown menu selection

#### January 29, 2020 update

**Added:**
- publisher web course catalogue pages
- learner groups with 'filter by student group' option on publisher course reports
- introduced less intrusive loading indicators that more accurately reflect the loading process
- new navigation header bar that includes a drop down for logged in user menu options

**User interface changes:**
- separated the 'selected course navigation and info' away from header bar into its own bar below the main navigation
- replaced 'change role' menu with publisher and admin dashboards available in logged in user menu
- removed items from sidebar now available in header and course navigation bars
- removed the sidebar
- cleaned up and applied more consistent styling to user interface and pages
- important changes to the mobile experience, with better compatibility across all devices and better space utilisation

**Improved:**
- memory utilisation
- loading speed (replaced eager loading with lazy loading)


#### November 19, 2019 update

**Added:**
- geo-id of users at login, by IP location, with taxes only showing for those in Canada
- proper tax breakdown on checkout page (beside credit card collection info)
- prefilled email input on checkout page
- coupon expiry date and/or maximum uses
- group coupons with custom intro page for students of each group
- course descriptions to Webcourse Catalogue
- loading indicators to activity's Next button, the Buy button, and My Webcourses page
- automatic theme changing to match publisher when user selects a course

**Improved:**
- coupon entry feedback messages
- loading time

**Fixed:**
- live update of chapter completion level indicators (no page reload required)


#### October 23, 2019 update
- Added tax calculations to course prices
- Added option to add discount coupons for purchases

#### October 16, 2019 update (highlights)
- By-pass all landing pages, [go direct to login prompt](https://www.cultivatelearning.ca/courses/login). Already logged in? You'll be redirected to the My Webcourses section.
- Activity answer / progress saving indicator added. When clicked, the `Save` button greys out and is disabled, showing a pulsing spinner. When save is completed, the `Next` button appears. (Before this release, the `Next` button was available as soon as `Save` was clicked.)
- Logged in user name now shows by the logout button. Gravatars (global avatars) are also included, showing the user selected image or a default 'anon' image.
