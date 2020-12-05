Vue.component('modal-case01', {
    template: `
      <template>
          <transition name="modal">
              <div class="is_modal_bg">
                  <div class="is_modal_close" @click.self="$emit('close')">Dummy Close</div>
                  <div class="is_modal_container" @click.self="$emit('close')">
                      <div class="is_modal_wrapper">
                          <div class="is_modal_header">
                              <slot name="header"></slot>
                          </div>
                          <div class="is_modal_body">
                              <slot name="body"></slot>
                           </div>
                          <div class="is_modal_footer">
                              <slot name="footer"></slot>
                          </div>
                      </div>
                  </div>
              </div>
          </transition>
    </template>
  `
})

Vue.component('modal-case02', {
  template: `
    <template>
        <transition name="modal">
            <div class="is_modal_bg">
                <div class="is_modal_close" @click.self="$emit('close')">Dummy Close</div>
                <div class="is_modal_container" @click.self="$emit('close')">
                    <div class="is_modal_wrapper">
                        <div class="is_modal_header">
                            <slot name="header"></slot>
                        </div>
                        <div class="is_modal_body">
                            <slot name="body"></slot>
                         </div>
                        <div class="is_modal_footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
  </template>
`
})

Vue.component('modal-case03', {
  template: `
    <template>
        <transition name="modal">
            <div class="is_modal_bg">
                <div class="is_modal_close" @click.self="$emit('close')">Dummy Close</div>
                <div class="is_modal_container" @click.self="$emit('close')">
                    <div class="is_modal_wrapper">
                        <div class="is_modal_header">
                            <slot name="header"></slot>
                        </div>
                        <div class="is_modal_body">
                            <slot name="body"></slot>
                         </div>
                        <div class="is_modal_footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
  </template>
`
})

Vue.component('modal-case04', {
  template: `
    <template>
        <transition name="modal">
            <div class="is_modal_bg">
                <div class="is_modal_close" @click.self="$emit('close')">Dummy Close</div>
                <div class="is_modal_container" @click.self="$emit('close')">
                    <div class="is_modal_wrapper">
                        <div class="is_modal_header">
                            <slot name="header"></slot>
                        </div>
                        <div class="is_modal_body">
                            <slot name="body"></slot>
                         </div>
                        <div class="is_modal_footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
  </template>
`
})

Vue.component('modal-case05', {
  template: `
    <template>
        <transition name="modal">
            <div class="is_modal_bg">
                <div class="is_modal_close" @click.self="$emit('close')">Dummy Close</div>
                <div class="is_modal_container" @click.self="$emit('close')">
                    <div class="is_modal_wrapper">
                        <div class="is_modal_header">
                            <slot name="header"></slot>
                        </div>
                        <div class="is_modal_body">
                            <slot name="body"></slot>
                         </div>
                        <div class="is_modal_footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
  </template>
`
})

Vue.component('modal-case06', {
  template: `
    <template>
        <transition name="modal">
            <div class="is_modal_bg">
                <div class="is_modal_close" @click.self="$emit('close')">Dummy Close</div>
                <div class="is_modal_container" @click.self="$emit('close')">
                    <div class="is_modal_wrapper">
                        <div class="is_modal_header">
                            <slot name="header"></slot>
                        </div>
                        <div class="is_modal_body">
                            <slot name="body"></slot>
                         </div>
                        <div class="is_modal_footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
  </template>
`
})

new Vue({
  el: '#modal-case01',
  data: {
      showModal: false,
  }
})

new Vue({
  el: '#modal-case02',
  data: {
      showModal: false,
  }
})

new Vue({
  el: '#modal-case03',
  data: {
      showModal: false,
  }
})

new Vue({
  el: '#modal-case04',
  data: {
      showModal: false,
  }
})

new Vue({
  el: '#modal-case05',
  data: {
      showModal: false,
  }
})

new Vue({
  el: '#modal-case06',
  data: {
      showModal: false,
  }
})

