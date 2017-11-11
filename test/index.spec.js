import React from 'react';
import index from 'index';
import requestFake, { set, reset } from 'di_request_fake';

beforeEach(() => {
  jest.doMock('di_request', (settings) => requestFake(settings));
  reset();
  set([
    {data: {title: "test"}, status: 200}
  ]);
});

test('initial snapshots with timeout', async (done) => {
  var div = document.createElement('div');
  div.id = "SKELETON";
  document.body.appendChild(div);
  index.create({container: "SKELETON", name: "skeleton"});
  expect.assertions(2);
  expect(div).toMatchSnapshot();
  await setTimeout(() => {
    expect(div).toMatchSnapshot()
    done();
  }, 1100);
});
test('initial snapshots with async timeout', async (done) => {
  var div = document.createElement('div');
  div.id = "SKELETON2";
  document.body.appendChild(div);
  index.create({container: "SKELETON2", name: "skeleton"});
  expect.assertions(2);
  expect(div).toMatchSnapshot();
  await setTimeout(() => {
    expect(div).toMatchSnapshot();
    done();
  }, 3100);
});
test('responsive snapshots with timeout', async (done) => {
  var div = document.createElement('div');
  div.id = "SKELETON3";
  document.body.appendChild(div);
  index.create({container: "SKELETON3", name: "skeleton"});

  // Change the viewport to 500px.
  global.innerWidth = 500;

  // Trigger the window resize event.
  global.dispatchEvent(new Event('resize'));
  expect.assertions(2);
  expect(div).toMatchSnapshot();

  await setTimeout(() => {
    expect(div).toMatchSnapshot();
    done();
  }, 1100);
});
