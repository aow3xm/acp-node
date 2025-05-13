import { Solver } from '../src/acp.js';

const main = async () => {
  const solver = new Solver('qbpq4efphagvz297fh64xwv9pusf0853');

  const recaptcha = await solver.createRecaptchaTask({
    pageurl: 'https://www.google.com/recaptcha/api2/demo',
    sitekey: '6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-',
    enterprise: true,
    version: 'v3',
    invisible: true,
  });
  let resultRecaptcha = await solver.takeResult(recaptcha.taskId);

  while (resultRecaptcha.status !== 'completed') {
    resultRecaptcha = await solver.takeResult(recaptcha.taskId);
    console.log(new Date(), resultRecaptcha);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const turnstile = await solver.createTurnstileTask({
    pageurl: 'https://dashboard.capsolver.com/passport/login?redirect=/dashboard',
    sitekey: '0x4AAAAAAAFstVbzplF7A4pv',
  });
  let resultTurnstile = await solver.takeResult(turnstile.taskId);

  while (resultTurnstile.status !== 'completed') {
    resultTurnstile = await solver.takeResult(turnstile.taskId);
    console.log(new Date(), resultTurnstile.solution);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const image = await solver.createImageTask({
    body: 'iVBORw0KGgoAAAANSUhEUgAAAPAAAABQCAIAAACoK28rAAAM6UlEQVR4nOydeVgT197HD2sSCCZBIWzigigoi1hcEBXEKrhUrbXv283avlr3pWqrtXZ7ntoXX6t9q/hgeyvaenvLvV3Ua9mqgAIiorIIaBRkCUQQWQIEQgiT5D44mkyGQLaZECbn8/DHzG/OnPPLme+cOTu2VeW1AGKpcMa0aw0j5LNM4gsx2A61A5ChgXpSRoGCtjioKmUUKGgLgtpSRtEiaM6Y9uH+CyG66JgCUkbRXkKj2UGNX2tpaJUy9R6rrlUOKOvhhQVKGUW/OrQym6iaHRTAYqWMYmCjEBbYZoiFSxnFSuvACswmMwc+ICzaBY0Cc80MgQ+lP7oKGsUSOjKHBVDKA6GfoJXADB0SYIGiFS2Nwh6JlHfzPu92eW153eOaxi6RGJEidEe6A5PBdmEHzPUMDPcJmutjz7DD3Qj7Q4gFSllHBiyhq+/xLydmFlwplkqkg0fBZDEWrZ25fGM429VpoDAwrw0D6lhfNAi6vroh8ehvZTd4ekXEZDG2HV89a8mUwYPB3NcRKGXDUBO0XCa/mJCSdDpNhsgMi27lhmXvfDVHazD4JAbCouZdkIGqDt3RKjqx9/uK4spBQtvR7Ozs7SRdErlcrjHAhb8lcbiceStmD/5gYA0bB9QxUagEHf/RDxrVzHFlz146KzBs8uiJXg5MBmp8Imi+e+PepcTMx/xGXPizsb/4TfMFwOXZ7VDZA6Ojji02fwxAVeVoqGk8+O5hsUisvObEZr6yZcXcleHW1lYab1YoFBe+T7p4KgVnn7EwdHPsOqwFPjksMDfIQ60O/aCw4siWY8jTCvTC1+av2ryc7kjXGsW5+It/nk7FGb/+8+Ao95H9A+v+LKn3OC35t5sMm53bdylPRrmPdPVy4d16sDl23aI3Ftja6zR1yS904q30QlFbJ9bo5u06bsrY/oEl7XRJO53B7tElZga7R/knadf+apkhnDHtyp+gS3ghn4VmEfmuURMN3Xbdnd2M53VlHcm+kHvm4M9Yy9S5QTv/f7PWG/UqtJSYeellwI8y8180jNBQBuurZgBAQNhknKW5oUWXG5UPUi8R4AIPuRoMey3NwXPqQcwiWWcux9bWBsH0Xne0dugVg2HKHugW8oRisHaxQB2TB2Grvh1Zju0tKhGLRd2GxYN92AarhxDZEQ7UsQkgTNDiTjUFO7IcjY+TEHEPLVDEJoYYQfdKkd6eXqzFic0kJGYlw0jcUMRDCDGCFlQIcBaPce7GRHj+3Cf3eZkAABeX8f+z/kdrazU/hXyWXIYkJKxtbqoGAARPn/fme/uNSc5IoIJR2tuk+TkNJQVNFTyhsKVH3NVLo9uwOTRff870cLeIRV62ttZk+0CMoB8UVuAsfqETjYkwZvGHtbVF4i5hU1NV/o3EsNlrcAHy8n5G1cxkjoya97GQPwJ7lbwiHGpXI8W3mi7+Wnnr+mMZojbJp1uMdIuRhkdd2emCMyfKNu4OnvuiJ6meECPoouwSnGXKDD9jImQwWIsX7/3j975y91rOaf/JC9hsD+VVYavgeu6P6HHMkn10+gjc7WTIbn3sP3UPfGr/a4Q7YLZ8+n5uQR5+Sk9/WlsksQfy+VX+b23wJ88ZAj4BgopH5UUPsRa/0Imuo12MjHbipIjJUxYCABCkJy31MPZSasohBJECAAICY3x9tc9WhZCKu6eG9hLDwXakC4NOx5eYvyTwMtPqyHOGgBK6/0SOBa9GGB8tACA6Zk8tv7Czs6W66ubdsr+mBEQDAEpLUvj8wr52p5PLoujdhCSkC27O+O8ADimCtHaIAQA03aYMUIZlq8cn/V4JALCzsw6P8pwd6REc6uo04tmqvJrKjnP/qEhP5ivDnzpWEh7pQaPbkOGMsVlfUVx583IB1uI53v2FqBAjo0Wh00fELNn3+697AQDpl4/5TAhTKBQZ6cfRq0uXHaDRCO5LGYSDG5cMHiA1j/fH1TsAgFmaJrFQGO9xTnOiPMdOYL20erwTyx53dazPiN2fveA9zun0iTLU0tbac/WvuugVpOSSUYJGepGzhxJxxtXbVlpZaZ5uagC+vnMCAmPKStPE4raM9Di5XNbd3QEAmBqyfNz4GUSlYjwKBcgqflbvigjxGWp3TM3HsTMHD7B6zcRrmY/K7wnR08L8JyQJ2qg69G9xFwQPH2EtU2b6T50XZLRXaiyK3s1kjgIAlNxJLitNAwCwWG4LXtxBbCpGcre6obmtq6+44nK8uZyhdscciYrxVh5X8IQkpWK4oO/klF76JQNrcWAy1n3+NhFeqUGjMZcuU+tmXvrSJ/b2DoQnZAxXnzeL51le8awjY3xUjZD2Np0m0xqAgYKur2747sBpnHHNR69zXNlEeIXHa3QQnf5sjwRHR2dPTy1ry01Mm6i7pKK+792zs7W0CrTu0GiqViDSq3lNqvEYUocWCTuP7TopEUuwxvmr582KmU6cY2pcyYyXSETocVdXa072qflRW0lKywCyih7KFQoAQKi/N91UXRw/hG0z5vb38k4Q54tOtGFKZQdH/M5ERKF3Cd0jkX6z48QTQRPW6Bvs8+YH/0WoYyoEdSWFBeef5gLHwaHvC5B/I7Hx8QOSktMXmVyR9XxxsQU2B3Wnqlw1fMv1IKvGqJ+g5TJ5/L4fanh8rNHFc9T2IxttbEnpVpTJelOSY9HjqKitkfM3Pe1SkCcn/a9cbuDmIcRSXC7o6Or7WHm5ssd7aFhGCUHJuqQaT/EPJCuj9Ps+nvrip5LcMqyFyXLcE7fdiTPgJmBGcj33bEtL3/vj6RkQGLQEAFBU9O+Gel5jY8XN/MRZYW+RlK7uqJqDU01aPEcf2WTK5IwkPYlfVyNSns6O9CApIT0E/a9j5/JSb2ItdvZ2O77ZzPV2JcGxPlqaa/Ku/wQAsLKyio7ZgxqjYz746cx6hUKRk50wyS+Sw/EiKXVdeCLs5NU09mWFrU1YgEmbg97hAaZMzhhqKjtOHr2jPJ3gxwmcNoqktHStcqSevZT298tqd1pbbzm03jeYxGIpJfmQTIY8HUZZwXWbhBrd3f2DgpehczxSkw+Rl7ouXHk+zTDUbzSDRlZDZ1gj4Hce2H6tW4ygp9bWVlv3TiUvOZ0Efe1i3q/Hz+OMb+9/nfAxFCyFBecEghIAAJ0xIiJS7fM6P2oL2ovH5xeW3Ekiz4fB6UVkuSXV6HFEyIShcsOcqa0S7d2UJWxRdYi9ud5/0hQSB560C7oo6w5uiwIAwKrNyyNeJnGam0jUdCUzHj2OjNzIYKhNDGIwWPMi3kOPM9LjurpayfNkEG7yasVP9xr2GMWa4EXWN3T4UlPZsXdTdlurqrdufszo19cZNa9YK1oEXV708OT+BNzWjDFrFr60bjGpbl1KOyKVigEAXK7v1JCV/QNMe2GVK7evUJRIRH+lHSHVmYHIKnzWHJwTPH5IHDBn2oU9n72f29GuUvO0mdzdn4aSne5gjcK6CsG3u+J7pWqLBSNenvPfO1eR7dYrr/7f4AGsrKzXrT9LthuDUNfYVlXf0peDNtbhgeNM74CZD6wc+6qw+Ylq3bRfgPOnh2fZ2BI2a20gBiyhm+tbjm6L61Zfyz1jYejaj98g26dhgbK3btqk0Y4M/JxJC+d+WeuNnAblqaubw+dHZ5M0ARqHZkGLhJ1Hth7H7rMBAAgKD9jw5TsETg0dvkikyI27NegxHB3sT0aK2v5ye7+czmKb6J3XUOWQiHu+2RHXWPcEa5wYMmHb4Q0kDQcOO66XVvdIEXQZyyTSuuEHx5wHVu6VqDaCmzHHfXKQ6QZQ8YJGepFju+NreGpv2Fh/713fbrWD/azPySoa+uagOQ+sNNardhkPizBqQwt9UatyKBSK7z85c/92OdboPtZtT9x2XTaKthAeCpofNbUDAGxsrMODhqA5aP6Iu1QdCR5eplsmhxf02djE2xmFWMtIN+cP43cyid4GaVhz9XlvXYivp5MDbajdMXdM0xZUoqpynP/uz6vncrDXnLmcpe9EN9Q8bqh5bFjsNIa9TyCl+mg7u3tu339WH5tr2tlIw4iUfNI7dgdCteH5u6Ha9yfXF7cx3Ng/viA8WghkIEjfawwCMSVQ0BBKYVl7/EBMgKRbFv918fWr9QgiD5w2asf+aS5cvf/JicHAEhpCMAlxpenJfHFXr7RHVpDXGHsg35Spq0roM7dPmjJhCFW5lqG299D90tbWFonzSBONY8ASGkIw/TeRaRdKTZY6FDSEYNjO+MEm55GmG36CgoYQzPxob+xpcKgLi2M6QcNeDgjBrN08WSqVZacLeqXykBmu2/YRs7eyjmj418gQyPAFVjkglAIKGkIpoKAhlAIKGkIpoKAhlAIKGkIpoKAhlAIKGkIpoKAhlAIKGkIpoKAhlAIKGkIpoKAhlAIKGkIp/hMAAP//xyOXo5euTEYAAAAASUVORK5CYII=',
    version: 'default',
  });
  let resultImage = await solver.takeResult(image.taskId);

  while (resultImage.status !== 'completed') {
    resultImage = await solver.takeResult(image.taskId);
    console.log(new Date(), resultImage.solution);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const balance = await solver.getBalance();
  console.log(" index.ts:48 - balance:", balance)
};

main();
