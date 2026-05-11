<template>
  <section id="about" class="min-h-screen flex items-center justify-center bg-cream py-16 px-4">
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Left side: Content -->
        <div class="space-y-6">
          <blockquote class="font-cormorant text-base leading-relaxed text-maroon text-center">
            <!-- Content will be added here -->
            <p class="italic mb-4">
              “Người kể những câu chuyện thương hiệu theo góc nhìn truyền thông sáng tạo, góp phần
              lan tỏa giá trị và tạo sự kết nối giữa thương hiệu với công chúng.”
            </p>
          </blockquote>

          <div class="h-1 w-24 bg-maroon"></div>

          <div class="font-cormorant text-base leading-relaxed text-maroon font-semibold">
            <!-- Main bio content -->
            <p>
              Tôi đam mê kể những câu chuyện thương hiệu theo góc nhìn truyền thông sáng tạo, cùng
              các cộng sự dẫn dắt công chúng đi qua từng tầng giá trị, từ nhận biết ban đầu, đến sự
              yêu thích và xa hơn là niềm tin cùng sự kết nối dài lâu. Mục tiêu của tôi là trở thành
              một Brand Manager có khả năng truyền tải các hoạt động truyền thông bằng tư duy hệ
              thống, đồng thời chuyển hóa chiến lược thương hiệu thành những trải nghiệm nhất quán,
              có chiều sâu, tạo giá trị cho thương hiệu và công chúng.
            </p>
          </div>
        </div>

        <!-- Right side: Image -->
        <div class="flex items-center justify-center">
          <div
            class="u-image-zoom-hover-container w-full aspect-square rounded-lg bg-linear-to-br from-maroon to-maroon/80 flex items-center justify-center overflow-hidden"
          >
            <!-- Placeholder for image -->
            <img
              class="u-image-zoom-hover h-full w-full object-contain object-center"
              src="/src/assets/images/about.jpg"
              alt="About image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
