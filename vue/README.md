
			
			LeadIndex页面进行缓存
			
			exclude属性表示该页面没有被缓存,通过逗号隔开进行革除缓存处理
			:exclude="['LeadIndex','Asset']"也能通过动态缓存处理；
			
			include缓存处理，需要缓存的组件；
			:include="['LeadIndex']"
		
-------------------------------------------------------------------------------------
		插槽内容：
		父级：<PersonCenter>
				<span >
					个人中心
				</span>
			</PersonCenter>
			
		子级：<span>personCenter</span>
			<slot></slot>
			

		具名插槽：
			父级：<PersonCenter>
					<span slot='per'>个人中心</span>
					<h2 slot='mine'>我的未来</h2>
					<h1>疯狂的世界反</h1>
				</PersonCenter>
				

			子级：<slot name='per'></slot>
				<slot name='mine'></slot>
				

			注：未匹配的名字内容，将给抛弃；父级元素中给slot属性和子级slot给name属性。
			

			作用域：父级只作用于父级，子级只作用于子级。

-------------------------------------------------------------------------------------------

		子父级组件的交互：
				
				父——>子：props接受；
					父级中的子组件:<money :num='num' ></money>
						子级：props接受
						
				

				子--->父：
					子级---通过$emit自定义事件：this.$emit('dataMy','我是')
										                                   事件名    , 传入的内容
							
					父级----通过v-on绑定事件名简写@：<money  @dataMy='dataMy'></money>	
							方法中的参数，为传入的值。
					dataMy(id){
						this.http.log(id,1)
					}
					
----------------------------------------------------------------------------------------	                                   

