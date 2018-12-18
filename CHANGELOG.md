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

