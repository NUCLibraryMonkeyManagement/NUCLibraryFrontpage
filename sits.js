var firstSeatLabel = 1;
var num;
var sc;
var a,b;
$(document).ready(function() {
    var $cart = $('#selected-seats'),
        $counter = $('#counter'),
        $total = $('#total');
        sc = $('#seat-map').seatCharts({
            map: [
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
                'eeeeeeee',
            ],
            seats: {
                e: {
                    price   : 1,
                    classes : 'normal-sit',
                    category: '座位'
                }

            },
            naming : {
                top : false,
                getLabel : function (character, row, column) {
                    return firstSeatLabel++;
                },
            },
            legend : {
                node : $('#legend'),
                items : [
                    [ 'e', 'available',   '可选座位'],
                    [ 'f', 'unavailable', '已经被预约的座位']
                ]
            },
            click: function () {
                if (this.status() == 'available') {
                    if (parseInt($total.text())) {
                        alert('只能选一个座位。再次点击已选择的座位或者点击右侧的取消预约来取消选择');
                        return 'available';
                    }else if(sessionStorage.obj){
                        alert('已经选过座位');
                        return 'available';
                    }
                    $('<li>'+this.data().category+this.settings.label+'</b> <a href="#" class="cancel-cart-item">[取消预约]</a></li>')
                        .attr('id', 'cart-item-'+this.settings.id)
                        .data('seatId', this.settings.id)
                        .appendTo($cart);
                    $counter.text(sc.find('selected').length+1);
                    $total.text(recalculateTotal(sc)+this.data().price);
                    num = this.settings.label;
                    return 'selected';
                } else if (this.status() == 'selected') {
                    //更新计数器
                    $counter.text(sc.find('selected').length-1);
                    //更新总数
                    $total.text(recalculateTotal(sc)-this.data().price);

                    //从已选座位中移除
                    $('#cart-item-'+this.settings.id).remove();

                    //更新状态
                    return 'available';
                } else if (this.status() == 'unavailable') {
                    //已经预定的座位
                    return 'unavailable';
                } else {
                    return this.style();
                }
            }
        });

    //取消按钮
    $('#selected-seats').on('click', '.cancel-cart-item', function () {
        sc.get($(this).parents('li:first').data('seatId')).click();
    });
    var str = sessionStorage.obj;
    //已经被预约的座位
    sc.get([str, '4_1', '7_1', '7_7']).status('unavailable');

});
//确定只能选择一个座位
function recalculateTotal(csc) {
    var total = 0;

    csc.find('selected').each(function () {
        total += this.data().price;
    });

    return total;
}

//提交
function update() {

    a = parseInt(num/8+1);
    b = parseInt(num%8);
    var str = a+"_"+b;
    sessionStorage.obj = str;
    alert("选座成功");
}