# erecle

ereader-url-cleaner is an extension that cleans amazon kindle URLs by removing excess url parameters
into more readable, cleaner and easily bookmarkable format.

- [erecle](#erecle)
  - [EXAMPLE](#example)
  - [SHOWCASE VIDEO ON YOUTUBE](#showcase-video-on-youtube)
  - [TECH USED](#tech-used)
  - [DONATE](#donate)

## EXAMPLE

FROM:  
`https://www.amazon.com/Skin-Game-Hidden-Asymmetries-Daily-ebook/dp/B075HYVP7C?crid=3SPX4AKG7SULO&dib=eyJ2IjoiMSJ9.7A7Jfqd38KgrfM0_sViEd-LqXKgg1nyfXgc_kDSurUa4WI43hj4z18ca4FBZipBXgZGwq2ZTNkhBl5xe-EbZ7l7JcAOMciBA4noDS0wydw93Xm8t5SJC1jzuf2PdgQyiOtSCzJEp5f5-yPGDmAUvY2SBwlgsYASGXwwVFT2kCclncf9rgAeap8LpafttezTVfb9B0zq4F3Fif1cVbEYuqgBVPZ1X7FUtpr0uqZIr0Jc.0bQv8UieKQMJLcfE40x5W-_LUKkOYq7NFpSHy4lSM0E&dib_tag=se&keywords=nassim+taleb+kindle&qid=1774154913&s=digital-text&sprefix=nassim+t%2Cdigital-text%2C1967&sr=1-4`

TO:  
`https://www.amazon.com/Skin-Game-Hidden-Asymmetries-Daily-ebook/dp/B075HYVP7C`

Works with all amazon websites, like `.com`, `.co.uk`, etc that are listed here:  
[websites](https://github.com/monoira/projects/blob/main/2026-03-21_erecle/constants/amazonUrls.ts)

## SHOWCASE VIDEO ON YOUTUBE

[![showcase demo](https://img.youtube.com/vi/F2tXCtZqEpE/maxresdefault.jpg)](https://www.youtube.com/watch?v=F2tXCtZqEpE)

## TECH USED

- [wxt](https://wxt.dev/guide/introduction.html)
- reactjs
- typescript

_icons generated via:_

```bash
for size in 16 32 48 96 128; do magick icon.png -resize ${size}x${size} ${size}.png; done
```

## DONATE

I've been creating FOSS / GNU/Linux / nvim / web
related software for some time now.  
If you used, forked or took code from one of my projects and you
would like to support me 👍,  
you can donate here:

| type                | address                                    |
| ------------------- | ------------------------------------------ |
| Bitcoin (SegWit)    | bc1ql8sp9shx4svzlwv0ckzv8s7pphw5upvmt8m2m7 |
| Ethereum (Ethereum) | 0xf2FCB0Af39DF7A608b76297e45181aF23fEB939F |
