// Works in Firefox 57+, Node 10+, Chrome 70+

function wait(period) {
  return new Promise(resolve => {
    setTimeout(resolve, period);
  });
}

async function* range(from, to) {
  for (let x = from; x <= to; x++) {
    await wait(500);
    yield x;
  }
}

async function main() {
  for await (let x of range(40, 49)) {
    console.log(x);
  }
}

main();
