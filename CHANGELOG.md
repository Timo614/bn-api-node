#### 1.0.12 (2019-03-19)

##### New Features

* **endpoints:**  Removed unused field requirements for facebook login

#### 1.0.11 (2019-03-11)

##### New Features

* **endpoints:**  Added endpoints for `admin.ticketCount` and `admin.stuckDomainActions` ([9e5b16fe](https://github.com/big-neon/bn-api-node/commit/9e5b16fe08e71003eced70ba7c10ea8ba97d8c55))


#### 1.0.10 (2019-03-05)

##### New Features

*  **endpoint:** Added broadcasts endpoints `broadcasts.read` `broadcasts.update` `broadcasts.del` `events.broadcasts.create` `events.broadcasts.index` ([6abf17ce](https://github.com/big-neon/bn-api-node/commit/6abf17ce248ec1a73e4dcdcd07177a5b55a8babe))
*  **enums:** Added enums for broadcasts

##### Other Changes

* **field:** Added missing fields `organization`.`globee_api_key` and `events`.`private_access_code` ([82a5a5f6](https://github.com/big-neon/bn-api-node/commit/82a5a5f67a510cc669fd983f057f59dac8964bef))

#### 1.0.9 (2019-02-21)

##### Other Changes

* **endpoint:**  Added settlements endpoints ([f3800432](https://github.com/big-neon/bn-api-node/commit/f38004327a7302cd436ccdcda91e357d9ee8f9ea))

#### 1.0.8 (2019-02-19)

##### New Features

* **enhancement:**  Added Sold out behavior to ticket_types ([f39a5b7a](https://github.com/big-neon/bn-api-node/commit/f39a5b7aabd7ece7803d38e182d653deb634124d))

#### 1.0.7 (2019-02-18)

##### New Features

* **endpoints:**  Added `events.users.del` and `events.users.deleteInvite` 

#### 1.0.6 (2019-02-15)

##### New Features

* **endpoints:**  Added `events.users.index` and `events.users.invite` 

#### 1.0.5 (2019-02-08)

##### New Features

* **endpoints:**  Added cart.clear ([d9537957](https://github.com/big-neon/bn-api-node/commit/d953795766fc1a162883a77daf19e66247767ad4))
* **endpoints:**  Kept venues.events.index but changed the url associated with it ([d9537957](https://github.com/big-neon/bn-api-node/commit/d953795766fc1a162883a77daf19e66247767ad4))

#### 1.0.4 (2019-01-28)

##### New Features

* **field:**  Added event_type to events ([6ec6f9b3](https://github.com/big-neon/bn-api-node/commit/6ec6f9b38910ec307d5f661331e2a221bbde67f8))

#### 1.0.3 (2019-01-22)

##### New Features

* **interfaces:**  Added `RefundItemInterface` ([d1834c57](https://github.com/big-neon/bn-api-node/commit/d1834c57fd17c334eadc58aa556e864bbc4d9641))

#### 1.0.3 (2019-01-21)

##### Docs

* Added captcha_response to auth token and register
#### 1.0.2 (2019-01-16)

##### Bug Fixes

* Fixed the auth and user create pre-processor undefined trim bug.

#### 1.0.1 (2019-01-15)

##### Other Changes

*  Added missing fields for event-artists and events ([e6b5495e](https://github.com/big-neon/bn-api-node/commit/e6b5495e2ab7255bf885688cb3bc2e75492f3ddd))

##### Tests

*  Fixed event-artist tests ([66368713](https://github.com/big-neon/bn-api-node/commit/66368713ff8915037ae83399d026fe49a54190b8))

## 1.0.0 (2019-01-15)

### Bumping to stable

---
#### 0.3.27 (2019-01-15)

##### New Features

* **endpoints:**
  *  Added `stages` and `events.stages` crud endpoints ([85d7e0bb](https://github.com/big-neon/bn-api-node/commit/85d7e0bbafe6825d54455728b338953b26f9bf80))
  *  Added `orders.details` and `orders.refund` endpoints ([cb5d6658](https://github.com/big-neon/bn-api-node/commit/cb5d6658423ed12c99bf305759769aa32b3677c9))
  *  Added `events.fans` endpoint ([5d8a715c](https://github.com/big-neon/bn-api-node/commit/5d8a715cf6bab08c631f520323305d598eb7b611))

##### Other Changes

*  Added fields to events ([0e84f4b5](https://github.com/big-neon/bn-api-node/commit/0e84f4b5e672605c72ed2144fb2f2718302e3373))

#### 0.3.26 (2019-01-05)

##### New Features

*  Added cancelToken to queries ([b669287d](https://github.com/big-neon/bn-api-node/commit/b669287dfd7450062888c1b9d286b45a1b375458))
* **endpoints:**  Added cancel ticketTypes endpoint ([9cfc3b0d](https://github.com/big-neon/bn-api-node/commit/9cfc3b0d85a3be0ee08d8bb2b7efb807a6542599))

#### 0.3.25 (2019-01-02)

##### New Features

* **endpoints:**  Added `events.unpublish` endpoint ([332c345e](https://github.com/big-neon/bn-api-node/commit/332c345e871838ac42bb99ae10bc04548e665130))

#### 0.3.24 (2019-01-01)

##### New Features

* **endpoints:**  Added Ticket Count report ([a22b1121](https://github.com/big-neon/bn-api-node/commit/a22b1121d8b972d594a60f562806560bb0168564))
*  Added ignoreValidation to requests to bypass the middleware validation ([982e6702](https://github.com/big-neon/bn-api-node/commit/982e67020f7e347161387173372cf86cfae602ab))

##### Other Changes

*  Added all required fields to ticket types ([982e6702](https://github.com/big-neon/bn-api-node/commit/982e67020f7e347161387173372cf86cfae602ab)) 
*  Added required price_in_cents field to ticket_types ([28b15ffa](https://github.com/big-neon/bn-api-node/commit/28b15ffa45c171cb030c001a2680e27c4c329a06))
*  Added timezone field to venue interface ([e8ff2764](https://github.com/big-neon/bn-api-node/commit/e8ff2764e5fe46b04b63a3cfb86f192b785d8e8f))

#### 0.3.23 (2018-12-30)

##### New Features

* **endpoints:**  Added eventSummary endpoint and interfaces ([316edc23](https://github.com/big-neon/bn-api-node/commit/316edc230725f04644be39e4290959fb16f6d0ea))

##### Other Changes

*  Updated report url ([3200c9ce](https://github.com/big-neon/bn-api-node/commit/3200c9ced6c261c7d3bbf0c3c740cd27a7595785))

#### 0.3.22 (2018-12-30)

##### New Features

* **endpoints:**  Added report endpoints and interfaces ([57fa01b8](https://github.com/big-neon/bn-api-node/commit/57fa01b80529819cf14a4cf5586e74cabb6863fc))

#### 0.3.21 (2018-12-28)

##### Other Changes

*  Fixed unauthed attempt issue ([cb017e5f](https://github.com/big-neon/bn-api-node/commit/cb017e5f78143f7d9b3ebf5fd0e9b4487d290fad))

#### 0.3.20 (2018-12-24)

##### Documentation Changes

*  Updated docs ([05466463](https://github.com/big-neon/bn-api-node/commit/054664638c403e4c87cbd994bac31ebef844377d))

##### New Features

* **endpoints:**  Moved userInvites to the root level ([e03336dd](https://github.com/big-neon/bn-api-node/commit/e03336dd4b1d83b94b75e8b3ecbcecb9b0aceb8a))
* **enhancements:** Removed jwt-decode and used builtin methods
##### Documentation Changes

*  Updated docs ([05466463](https://github.com/big-neon/bn-api-node/commit/054664638c403e4c87cbd994bac31ebef844377d))

##### New Features

* **endpoints:**  Added user invitations endpoint ([65a12876](https://github.com/big-neon/bn-api-node/commit/65a128767e488d82e392d2efa7e6f26b46a7fea3))
* **enhancements:** If there is a refresh token it will attempt to renew an access_token if it is expired

##### Other Changes

*  Add missing org and artist fields ([d7af3f1d](https://github.com/big-neon/bn-api-node/commit/d7af3f1dc45fbca07041ae37841de4a0b45eca29))

#### 0.3.19 (2018-12-18)

##### Other Changes

*  roles are now arrays for invitations ([03b04e8e](https://github.com/big-neon/bn-api-node/commit/03b04e8ece2c5ca9c68c86f55668aa64dbddd937))

#### 0.3.18 (2018-12-18)

##### New Features

* **endpoints:**  Added organization invite endpoints ([9314fc7f](https://github.com/big-neon/bn-api-node/commit/9314fc7fee2914602877b0725be33b1cf41665e0))

#### 0.3.17 (2018-12-17)

##### New Features

*  Trimming user create, createAndLogin and auth fields ([4cf320fd](https://github.com/big-neon/bn-api-node/commit/4cf320fdee105313ca646dcdd1176d851e2e7989))

#### 0.3.13 (2018-12-12)

##### Documentation Changes

*  Created the docs for the new endpoints ([863b3b0b](https://github.com/big-neon/bn-api-node/commit/863b3b0b5b0bdfe1ce385b4f211202acbcc6e7e9))

##### New Features

* **deviceTokens:**  Added CRUD for device tokens ([cb1f3142](https://github.com/big-neon/bn-api-node/commit/cb1f31422ce0b09510e3cbb0b56db7e45b958065))
* **endpoints:**  Added delete cart ([72e1aee1](https://github.com/big-neon/bn-api-node/commit/72e1aee1647874f4ef16b3741698183680c507ca))

#### 0.3.9 (2018-12-05)

##### New Features

* **enum:**  Added the OverrideStatus enum ([480e01e1](https://github.com/big-neon/bn-api-node/commit/480e01e1b2b6ccef9231bc609f0250018847d498))

#### 0.3.8 (2018-12-04)

##### Documentation Changes

*  Build docs for orders ([b7c47397](https://github.com/big-neon/bn-api-node/commit/b7c473970bd5c6dc2b42375be3e176dc6c39c46b))
*  Build docs for comps ([c0ca726e](https://github.com/big-neon/bn-api-node/commit/c0ca726e0eadf040b5f2594964d2d23ddafa2a87))

##### New Features

* **endpoints:**
  *  Added `orders.tickets.index` and `orders.update` ([6018d53f](https://github.com/big-neon/bn-api-node/commit/6018d53f9f9066420c57353fb813a6fc827c7dcf))
  *  Added /events/checkins endpoint ([#238](https://github.com/big-neon/bn-api-node/pull/238)) ([58017291](https://github.com/big-neon/bn-api-node/commit/5801729119523fab9404045ade99b2f30edcdbe4))
  *  comps.[update, del, read] endpoints ([1c3e8a5d](https://github.com/big-neon/bn-api-node/commit/1c3e8a5d35b9888a25960073f2ab27e16d0b9d79))
  *  Added /events/checkins endpoint ([#238](https://github.com/big-neon/bn-api-node/pull/238)) ([58017291](https://github.com/big-neon/bn-api-node/commit/5801729119523fab9404045ade99b2f30edcdbe4))
  *  Added organizations.fans.[read, history, index] ([0c4f35f7](https://github.com/big-neon/bn-api-node/commit/0c4f35f7b0307127d4ac3f3681495f6198d65173))
  *  Added /events/checkins endpoint ([#238](https://github.com/big-neon/bn-api-node/pull/238)) ([58017291](https://github.com/big-neon/bn-api-node/commit/5801729119523fab9404045ade99b2f30edcdbe4))


#### 0.3.6 (2018-11-29)

##### Documentation Changes

*  updated docs ([60d3c916](https://github.com/big-neon/bn-api-node/commit/60d3c916b71a48818a6e4ad847688e47556896f1))

#### 0.3.5 (2018-11-26)

##### New Features

* **endpoints:**  Moved the ticket redeem to events `events.tickets.redeem` ([dee01de9](https://github.com/big-neon/bn-api-node/commit/dee01de92db97dc415eaa0b3940880523c06ba26))

##### Tests

*  Added thumb_image_url to artist seed ([6cfb8862](https://github.com/big-neon/bn-api-node/commit/6cfb88621fa06d5906746c04e2a2872279ffb096))

#### 0.3.4 (2018-11-22)

##### New Features

* **endpoints:**  
  * Added artists.search endpoint ([b2bbb405](https://github.com/big-neon/bn-api-node/commit/b2bbb4052be7f28fb040feb44dbebd786f886032))
  * Added events.dashboard dashboard endpoint and return types ([2f17ccfa](https://github.com/big-neon/bn-api-node/commit/2f17ccfaade0c56fd3e10ec379ae27dbeac1adc0))

##### Tests

* **events:**  Use number of days for the start and door time ([#227](https://github.com/big-neon/bn-api-node/pull/227)) ([7b7d2aa6](https://github.com/big-neon/bn-api-node/commit/7b7d2aa6d81d9ec77887c8bcbcaed133ff0e875a))

#### 0.3.3 (2018-11-13)

##### Documentation Changes

*  Updated docs ([51a68c5d](https://github.com/big-neon/bn-api-node/commit/51a68c5de257fac828194ca09d582ce21fc04a2e))
*  Updated docs ([51a68c5d](https://github.com/big-neon/bn-api-node/commit/51a68c5de257fac828194ca09d582ce21fc04a2e))

##### Tests

* **ticketType:**  Add limit per person to test ([6410b8a9](https://github.com/big-neon/bn-api-node/commit/6410b8a9a11d03c1263f7b95128d942ebca740c9))

##### New Features

* **endpoints:**  Removed invalid endpoints ([76cfa429](https://github.com/big-neon/bn-api-node/commit/76cfa429093d23ab5f195d46b1be6c6041bbb696))

##### New Fields

* **events.video_url:** Added events.video_url as an optional field

#### 0.3.2 (2018-11-06)

##### New Features

* **endpoints:**
  *  Added codes.update codes.del codes.read ([e7b53f9b](https://github.com/big-neon/bn-api-node/commit/e7b53f9ba148e07e43e165d5da2928ab8232e6be))
  *  Added the events.codes endpoints ([78ed844f](https://github.com/big-neon/bn-api-node/commit/78ed844f1dfb99e59bcaef007823d1f3fc884eae))
  *  Added event discount index GET /events/{event_id}/discounts ([07cc5ca5](https://github.com/big-neon/bn-api-node/commit/07cc5ca54715bc242ee11f8f2c94ea6b6abd90d7))
  *  Added DELETE /holds/{id} ([7240bb53](https://github.com/big-neon/bn-api-node/commit/7240bb539d58c186b36ea3bebe634af8370eb1c5))

##### Tests

* **endpoints:**  Format layout of endpoint output ([26a73971](https://github.com/big-neon/bn-api-node/commit/26a739710671c910afdafeb07d4ceeb8647981f8))

