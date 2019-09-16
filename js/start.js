'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_SHADOW = '#fff';
var GAP = 10;
var INDENT = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_WIDTH = CLOUD_X + INDENT;
var TEXT_HEIGHT = CLOUD_HEIGHT - GAP * 1.5;
var BAR_Y = CLOUD_HEIGHT - GAP * 2.5;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_SHADOW);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXT_WIDTH, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', TEXT_WIDTH, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillStyle = (names[i] !== 'Вы') ? 'rgba(0, 77, 255,' + Math.random() + ')' : 'rgba(255, 0, 0, 1)';
    ctx.fillText(names[i], CLOUD_X + GAP * 3 + (INDENT + BAR_WIDTH) * i, TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 3 + (INDENT + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP * 4.5 - BAR_HEIGHT * times[i] / maxTime);
    ctx.fillRect(CLOUD_X + GAP * 3 + (INDENT + BAR_WIDTH) * i, BAR_Y, BAR_WIDTH, (-(BAR_HEIGHT * times[i]) / maxTime));
  }
};
